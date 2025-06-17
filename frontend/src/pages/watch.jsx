import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../src/styles/watch.css';
import Navbar from '../components/Navbar';

const WatchPage = () => {
  const [watches, setWatches] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWatches = async () => {
      try {
        const response = await axios.get('https://s89-vj-praveen-capstone-officehub-6.onrender.com/watche');
        setWatches(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load watches.');
        setLoading(false);
      }
    };

    fetchWatches();
  }, []);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(favs.map(fav => fav.id));
  }, []);

  // Store full watch object in localStorage for favorites
  const toggleFavorite = (watch) => {
    const stored = JSON.parse(localStorage.getItem('favorites')) || [];
    const exists = stored.find(fav => fav.id === watch.id);

    let updated;
    if (exists) {
      updated = stored.filter(fav => fav.id !== watch.id);
    } else {
      updated = [...stored, watch];
    }
    localStorage.setItem('favorites', JSON.stringify(updated));
    setFavorites(updated.map(fav => fav.id));
  };

  // Add to cart and redirect to cart page
  const addToCart = (watch) => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const exists = storedCart.find(item => item.id === watch.id);
    let updatedCart;
    if (exists) {
      updatedCart = storedCart.map(item =>
        item.id === watch.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      );
    } else {
      updatedCart = [...storedCart, { ...watch, quantity: 1 }];
    }
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    // Redirect to cart page
    window.location.href = '/cart';
  };

  return (
    <div className="watch-page-container">
      <Navbar />
      <h1>Watches</h1>
      {loading && <p>Loading watches...</p>}
      {error && <p className="error">{error}</p>}

      <div className="watches-grid">
        {watches.map((watch) => (
          <div
            key={watch.id}
            className="watch-card"
            style={{ position: 'relative', cursor: 'pointer' }}
            onClick={() => navigate(`/item/watch/${watch.id}`)}
          >
            <div
              className="favorite-toggle"
              onClick={e => { e.stopPropagation(); toggleFavorite(watch); }}
              title="Toggle Favorite"
            >
              {favorites.includes(watch.id) ? '❤️' : '🤍'}
            </div>
            <img src={watch.image} alt={watch.name} className="watch-image" />
            <h3>{watch.name}</h3>
            <p>{watch.description}</p>
            <p><strong>${watch.price}</strong></p>
            <button
              className="add-to-cart-button"
              onClick={e => { e.stopPropagation(); addToCart(watch); }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchPage;
