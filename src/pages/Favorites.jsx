import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import MovieCard from '../components/MovieCard';

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(stored);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-4">Favoritos</h2>
        <div className="flex flex-wrap">
          {favorites.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}
