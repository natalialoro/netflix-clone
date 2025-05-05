import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';
import { fetchPopularMovies, searchMovies } from '../services/tmdb';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState('Películas populares');

  useEffect(() => {
    async function loadMovies() {
      const data = await fetchPopularMovies();
      setMovies(data.results);
      setTitle('Películas populares');
    }
    loadMovies();
  }, []);

  const handleSearch = async (query) => {
    if (!query) return;
    const data = await searchMovies(query);
    setMovies(data.results);
    setTitle(`Resultados para "${query}"`);
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar onSearch={handleSearch} />

      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <div className="flex flex-wrap">
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}
