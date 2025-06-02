import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../src/styles/accessory.css'; 
import Navbar from '../components/Navbar';

const AccessoryPage = () => {
  const [accessories, setAccessories] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAccessories = async () => {
      try {
        const response = await axios.get('http://localhost:3000/accessory');
        setAccessories(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load accessories.');
        setLoading(false);
      }
    };

    fetchAccessories();
  }, []);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  return (
    <div className="accessory-page-container">
      <Navbar />
      <h1>Accessories</h1>
      {loading && <p>Loading accessories...</p>}
      {error && <p className="error">{error}</p>}

      <div className="accessory-grid">
        {accessories.map((item) => (
          <div key={item.id} className="accessory-card" style={{ position: 'relative' }}>
            <div
              className="favorite-toggle"
              onClick={() => toggleFavorite(item.id)}
              title="Toggle Favorite"
            >
              {favorites.includes(item.id) ? '❤️' : '🤍'}
            </div>
            <img src={item.image} alt={item.name} className="accessory-image" />
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

export default AccessoryPage;
