import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { StratagemsMap } from 'constants/stratagems-sequences';
import up from '../../assets/icons/up.svg';
import left from '../../assets/icons/left.svg';
import down from '../../assets/icons/down.svg';
import right from '../../assets/icons/right.svg';
import './App.css';

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

const ArrowApp: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [arrowSequence, setArrowSequence] = useState('');
  const [showArrows, setShowArrows] = useState(true);

  const handleKeyDown = (event: KeyboardEvent) => {
    const arrowDirection = ArrowDirections[event.key];
    // Prevent default browser behavior for specific keys
    if (event.key === 'Control' || arrowDirection) {
      event.preventDefault();
    }

    if (event.key === 'Control') {
      setShowArrows(true);
    } else if (event.ctrlKey && arrowDirection) {
      setArrowSequence((prevSequence) => prevSequence + arrowDirection);
      setShowIntro(false);
    }
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    if (event.key === 'Control') {
      setShowArrows(false);
      setArrowSequence('');
    }
  };

  const arrowToIcon: { [key: string]: string } = {
    W: up,
    A: left,
    S: down,
    D: right,
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const icons = arrowSequence.split('').map((arrow) => arrowToIcon[arrow]);
  const recognizedSequence = StratagemsMap.get(arrowSequence);

  return (
    <div className='App'>
      <div className='top-container'>
        {showIntro ? (
          <div className='instructions-container'>
            <h3>Hold CTRL and type Stratagem sequences using the WASD keys</h3>
          </div>
        ) : (
          <div className='stratagem-container'>
            <h2>Request...</h2>
            <h3>{recognizedSequence || '?'}</h3>
          </div>
        )}
      </div>
      <div className='arrows-container'>
        {showArrows && (
          <div className='arrows'>
            {icons.map((icon) => (
              <img src={icon} width={80} height={80} alt='arrow' />
            ))}
          </div>
        )}
      </div>
      <div className='bottom-container'>
        <p className='footer'>
          Made with <span className='heart'>♥</span> for democracy and freedom!
        </p>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ArrowApp />} />
      </Routes>
    </Router>
  );
}
