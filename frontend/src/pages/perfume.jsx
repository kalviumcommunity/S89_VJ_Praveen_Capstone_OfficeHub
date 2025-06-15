import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../src/styles/perfume.css'; 
import Navbar from '../components/Navbar';

const PerfumePage = () => {
  const [perfumes, setPerfumes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

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

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(favs.map(fav => fav.id));
  }, []);

  // Store full perfume object in localStorage for favorites
  const toggleFavorite = (perfume) => {
    const stored = JSON.parse(localStorage.getItem('favorites')) || [];
    const exists = stored.find(fav => fav.id === perfume.id);

    let updated;
    if (exists) {
      updated = stored.filter(fav => fav.id !== perfume.id);
    } else {
      updated = [...stored, perfume];
    }
    localStorage.setItem('favorites', JSON.stringify(updated));
    setFavorites(updated.map(fav => fav.id));
  };

  // Add to cart and redirect to cart page
  const addToCart = (perfume) => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const exists = storedCart.find(item => item.id === perfume.id);
    let updatedCart;
    if (exists) {
      updatedCart = storedCart.map(item =>
        item.id === perfume.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      );
    } else {
      updatedCart = [...storedCart, { ...perfume, quantity: 1 }];
    }
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    // Redirect to cart page
    window.location.href = '/cart';
  };

  return (
    <div className="perfume-page-container">
      <Navbar />
      <h1>Perfume</h1>
      {loading && <p>Loading perfume...</p>}
      {error && <p className="error">{error}</p>}

      <div className="perfume-grid">
        {perfumes.map((perfume) => (
          <div
            key={perfume.id}
            className="perfume-card"
            style={{ position: 'relative', cursor: 'pointer' }}
            onClick={() => navigate(`/item/perfume/${perfume.id}`)}
          >
            <div
              className="favorite-toggle"
              onClick={e => { e.stopPropagation(); toggleFavorite(perfume); }}
              title="Toggle Favorite"
            >
              {favorites.includes(perfume.id) ? '❤️' : '🤍'}
            </div>
            <img src={perfume.image} alt={perfume.name} className="perfume-image" />
            <h3>{perfume.name}</h3>
            <p>{perfume.description}</p>
            <p><strong>${perfume.price}</strong></p>
            <button
              className="add-to-cart-button"
              onClick={() => addToCart(perfume)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerfumePage;
