import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/favoritos" element={<Favorites />} />
        <Route path="/perfil" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;

