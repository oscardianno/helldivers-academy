import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './App.css';

const ArrowDirections: Record<string, string> = {
  w: '↑',
  a: '←',
  s: '↓',
  d: '→',
};

const ArrowApp: React.FC = () => {
  const [arrowSequence, setArrowSequence] = useState('↑←↓');
  const [showArrows, setShowArrows] = useState(true);

  const handleKeyDown = (event: KeyboardEvent) => {
    // Prevent default browser behavior for specific keys
    if (
      event.key === 'Control' ||
      event.key === 'w' ||
      event.key === 'a' ||
      event.key === 's' ||
      event.key === 'd'
    ) {
      event.preventDefault();
    }

    if (event.key === 'Control') {
      setShowArrows(true);
    } else if (event.ctrlKey && event.key in ArrowDirections) {
      const direction = ArrowDirections[event.key];
      setArrowSequence((prevSequence) => prevSequence + direction);
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
