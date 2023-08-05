import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
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
  const [arrowSequence, setArrowSequence] = useState('WASD');
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

  return (
    <div className='App'>
      {showArrows && (
        <div className='arrow-container'>
          <div className='arrow'>
            {icons.map((icon) => (
              <img src={icon} width={80} height={80} />
            ))}
          </div>
        </div>
      )}
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
