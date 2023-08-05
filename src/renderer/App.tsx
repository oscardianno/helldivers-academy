import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
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
  const [arrowSequence, setArrowSequence] = useState('↑←↓');
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

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className='App'>
      {showArrows && (
        <div className='arrow-container'>
          <div className='arrow'>{arrowSequence}</div>
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
