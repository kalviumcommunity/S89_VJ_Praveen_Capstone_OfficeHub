import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../src/styles/perfume.css'; 
import Navbar from '../components/Navbar';

const PerfumePage = () => {
  const [perfumes, setPerfumes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPerfume = async () => {
      try {
        const response = await axios.get('http://localhost:3000/perfume');
        setPerfumes(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load perfume.');
        setLoading(false);
      }
    };

    fetchPerfume();
  }, []);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  return (
    <div className="perfume-page-container">
      <Navbar />
      <h1>Perfume</h1>
      {loading && <p>Loading perfume...</p>}
      {error && <p className="error">{error}</p>}

      <div className="perfume-grid">
        {perfumes.map((perfume) => (
          <div key={perfume.id} className="perfume-card" style={{ position: 'relative' }}>
            <div
              className="favorite-toggle"
              onClick={() => toggleFavorite(perfume.id)}
              title="Toggle Favorite"
            >
              {favorites.includes(perfume.id) ? '❤️' : '🤍'}
            </div>
            <img src={perfume.image} alt={perfume.name} className="perfume-image" />
            <h3>{perfume.name}</h3>
            <p>{perfume.description}</p>
            <p><strong>${perfume.price}</strong></p>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerfumePage;
