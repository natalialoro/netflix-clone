import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  const handleBlur = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <nav className="bg-gray-900 text-white p-4 flex items-center justify-between">
      <div className="flex-shrink-0">
        <Link to="/" className="text-2xl font-bold text-red-600">Netflix Clone</Link>
      </div>
      <div className="flex-1 flex justify-center px-4">
        <input
          type="text"
          placeholder="Buscar películas..."
          value={query}
          onChange={handleInputChange}
          onBlur={handleBlur}
          className="w-full max-w-md p-2 rounded-md text-black"
        />
      </div>
      <div className="space-x-4 flex-shrink-0">
        <Link to="/">Inicio</Link>
        <Link to="/favoritos">❤️ Favorito</Link>
      </div>
    </nav>
  );
}
