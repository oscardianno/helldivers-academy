import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import ArrowsApp from 'components/ArrowsApp/ArrowsApp';
import PreloadImages from 'components/PreloadImages';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ArrowsApp />} />
      </Routes>
      <PreloadImages />
    </Router>
  );
}
