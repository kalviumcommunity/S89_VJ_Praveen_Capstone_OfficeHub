import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../src/styles/stationary.css'; 
import Navbar from '../components/Navbar';

const StationaryPage = () => {
  const [stationaryItems, setStationaryItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

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

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(favs.map(fav => fav.id));
  }, []);

  // Store full stationary item object in localStorage for favorites
  const toggleFavorite = (item) => {
    const stored = JSON.parse(localStorage.getItem('favorites')) || [];
    const exists = stored.find(fav => fav.id === item.id);

    let updated;
    if (exists) {
      updated = stored.filter(fav => fav.id !== item.id);
    } else {
      updated = [...stored, item];
    }
    localStorage.setItem('favorites', JSON.stringify(updated));
    setFavorites(updated.map(fav => fav.id));
  };

  // Add to cart and redirect to cart page
  const addToCart = (item) => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const exists = storedCart.find(cartItem => cartItem.id === item.id);
    let updatedCart;
    if (exists) {
      updatedCart = storedCart.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 } : cartItem
      );
    } else {
      updatedCart = [...storedCart, { ...item, quantity: 1 }];
    }
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.location.href = '/cart';
  };

  return (
    <div className="stationary-page-container">
      <Navbar />
      <h1>Stationary</h1>
      {loading && <p>Loading stationary...</p>}
      {error && <p className="error">{error}</p>}

      <div className="stationary-grid">
        {stationaryItems.map((item) => (
          <div
            key={item.id}
            className="stationary-card"
            style={{ position: 'relative', cursor: 'pointer' }}
            onClick={() => navigate(`/item/stationary/${item.id}`)}
          >
            <div
              className="favorite-toggle"
              onClick={e => { e.stopPropagation(); toggleFavorite(item); }}
              title="Toggle Favorite"
            >
              {favorites.includes(item.id) ? '❤️' : '🤍'}
            </div>
            <img src={item.image} alt={item.name} className="stationary-image" />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p><strong>${item.price}</strong></p>
            <button
              className="add-to-cart-button"
              onClick={e => { e.stopPropagation(); addToCart(item); }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StationaryPage;
