import { Link } from 'react-router-dom';

export default function MovieCard({ movie }) {
  const imagePath = movie.poster_path 
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
    : 'https://via.placeholder.com/500x750?text=No+Image';


  const toggleFavorite = () => {
    const stored = JSON.parse(localStorage.getItem('favorites')) || [];
    const exists = stored.find(m => m.id === movie.id);
    let updated;
    if (exists) {
      updated = stored.filter(m => m.id !== movie.id);
    } else {
      updated = [...stored, movie];
    }
    localStorage.setItem('favorites', JSON.stringify(updated));
  };

  return (
    <div className="w-40 m-2">
      <Link to={`/movie/${movie.id}`}>
        <img src={imagePath} alt={movie.title} className="rounded-md shadow-md hover:scale-105 transition-transform" />
        <h3 className="text-white text-sm mt-2">{movie.title}</h3>
      </Link>
      <button onClick={toggleFavorite} className="mt-1 text-xs bg-red-600 w-full text-white py-1 rounded-md">
        ❤️ Favorito
      </button>
    </div>
  );
}
      