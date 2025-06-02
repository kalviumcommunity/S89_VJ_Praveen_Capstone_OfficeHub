import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../src/styles/stationary.css'; 
import Navbar from '../components/Navbar';

const StationaryPage = () => {
  const [stationaryItems, setStationaryItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStationary = async () => {
      try {
        const response = await axios.get('http://localhost:3000/stationary');
        setStationaryItems(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load stationary items.');
        setLoading(false);
      }
    };

    fetchStationary();
  }, []);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  return (
    <div className="stationary-page-container">
      <Navbar />
      <h1>Stationary</h1>
      {loading && <p>Loading stationary...</p>}
      {error && <p className="error">{error}</p>}

      <div className="stationary-grid">
        {stationaryItems.map((item) => (
          <div key={item.id} className="stationary-card" style={{ position: 'relative' }}>
            <div
              className="favorite-toggle"
              onClick={() => toggleFavorite(item.id)}
              title="Toggle Favorite"
            >
              {favorites.includes(item.id) ? '❤️' : '🤍'}
            </div>
            <img src={item.image} alt={item.name} className="stationary-image" />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p><strong>${item.price}</strong></p>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StationaryPage;
