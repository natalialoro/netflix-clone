import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieById } from '../services/tmdb';
import Navbar from '../components/Navbar';

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function getMovie() {
      const data = await fetchMovieById(id);
      setMovie(data);
    }
    getMovie();
  }, [id]);

  if (!movie) return <div className="text-white">Cargando...</div>;

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <div className="p-6 flex flex-col md:flex-row">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-64 rounded-lg shadow-md mb-4 md:mb-0 md:mr-6"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
          <p className="mb-4">{movie.overview}</p>
          <p><strong>Calificación:</strong> {movie.vote_average}</p>
          <p><strong>Fecha de estreno:</strong> {movie.release_date}</p>
        </div>
      </div>
    </div>
  );
}
