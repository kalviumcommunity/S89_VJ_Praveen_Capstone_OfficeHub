import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../src/styles/watch.css';
import Navbar from '../components/Navbar';

const WatchPage = () => {
  const [watches, setWatches] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchWatches = async () => {
      try {
        const response = await axios.get('http://localhost:3000/watche');
        setWatches(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load watches.');
        setLoading(false);
      }
    };

    fetchWatches();
  }, []);

  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((favId) => favId !== id)
        : [...prevFavorites, id]
    );
  };

  return (
    <div className="watch-page-container">
      <Navbar />
      <h1>Watches</h1>
      {loading && <p>Loading watches...</p>}
      {error && <p className="error">{error}</p>}

      <div className="watches-grid">
        {watches.map((watch) => (
          <div key={watch.id} className="watch-card" style={{ position: 'relative' }}>
            <div
              className="favorite-toggle"
              onClick={() => toggleFavorite(watch.id)}
              title="Toggle Favorite"
            >
              {favorites.includes(watch.id) ? '❤️' : '🤍'}
            </div>
            <img src={watch.image} alt={watch.name} className="watch-image" />
            <h3>{watch.name}</h3>
            <p>{watch.description}</p>
            <p><strong>${watch.price}</strong></p>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchPage;
