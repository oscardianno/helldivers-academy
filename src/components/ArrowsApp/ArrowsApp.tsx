import React, { useState, useEffect } from 'react';
import {
  IStratagemWithTime,
  StratagemsMap,
} from 'constants/stratagems-sequences';
import up from '../../../assets/icons/arrows/up.svg';
import left from '../../../assets/icons/arrows/left.svg';
import down from '../../../assets/icons/arrows/down.svg';
import right from '../../../assets/icons/arrows/right.svg';
import Unrecognized from '../../../assets/icons/stratagems/png/Unrecognized.png';
import './ArrowsApp.css';
import SequenceNotification from './SequenceNotification';

const ArrowDirections: Record<string, string> = {
  W: 'W',
  w: 'W',
  A: 'A',
  a: 'A',
  S: 'S',
  s: 'S',
  D: 'D',
  d: 'D',
};

const arrowToIcon: { [key: string]: string } = {
  W: up,
  A: left,
  S: down,
  D: right,
};

const ArrowsApp: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [arrowSequence, setArrowSequence] = useState('');
  const [showArrows, setShowArrows] = useState(true);
  const [registerSequence, setRegisterSequence] = useState(false);
  const [sequenceHistory, setSequenceHistory] = useState<IStratagemWithTime[]>(
    [],
  );
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const arrowDirection = ArrowDirections[event.key];
      // Prevent default browser behavior for specific keys
      if (event.key === 'Control' || arrowDirection) {
        event.preventDefault();
      }

      if (event.key === 'Control') {
        setStartTime(Date.now());
        setShowArrows(true);
      } else if (event.ctrlKey && arrowDirection) {
        setArrowSequence((prevSequence) => prevSequence + arrowDirection);
        setShowIntro(false);
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === 'Control') {
        setEndTime(Date.now());
        setRegisterSequence(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useEffect(() => {
    if (registerSequence) {
      if (arrowSequence.length > 0) {
        let elapsedTime = 0;
        if (startTime !== null && endTime !== null) {
          elapsedTime = endTime - startTime;
        }
        let recognizedStratagem = StratagemsMap.get(
          arrowSequence,
        ) as IStratagemWithTime;
        recognizedStratagem = recognizedStratagem
          ? {
              ...recognizedStratagem,
              elapsedTime,
            }
          : {
              name: 'Unrecognized',
              sequence: arrowSequence,
              icon: Unrecognized,
              elapsedTime,
            };
        setSequenceHistory((prevHistory) => [
          ...prevHistory,
          recognizedStratagem,
        ]);
      }
      setStartTime(null);
      setEndTime(null);
      setRegisterSequence(false);
      setShowArrows(false);
      setArrowSequence('');
    }
  }, [arrowSequence, registerSequence, startTime, endTime]);

  const icons = arrowSequence.split('').map((arrow) => arrowToIcon[arrow]);
  const recognizedStratagem = StratagemsMap.get(arrowSequence);

  return (
    <div className='App'>
      <div className='top-container'>
        {showIntro ? (
          <div className='instructions-container'>
            <h3>Hold CTRL and type Stratagem sequences using the WASD keys</h3>
            <h3>Press CTRL + R to restart</h3>
          </div>
        ) : (
          <div className='stratagem-container'>
            <h2>Request...</h2>
            <h3>
              {recognizedStratagem?.name || '\u00A0'}
              {/* Non-breaking space if empty */}
            </h3>
            <img
              src={recognizedStratagem?.icon || Unrecognized}
              width={120}
              height={120}
              alt='arrow'
            />
          </div>
        )}
      </div>
      <div className='arrows-container'>
        {showArrows && (
          <div className='arrows'>
            {icons.map((icon, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <img key={index} src={icon} width={80} height={80} alt='arrow' />
            ))}
          </div>
        )}
      </div>
      <div className='bottom-right'>
        {sequenceHistory.map((sequence, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <SequenceNotification key={index} sequence={sequence} />
        ))}
      </div>
      <div className='bottom-container'>
        <p className='footer'>
          Made with <span className='heart'>♥</span> for democracy and freedom!
        </p>
      </div>
    </div>
  );
};

export default ArrowsApp;
