import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/fav.css';

const FavoritePage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFromFavorites = (id) => {
    const updatedFavorites = favorites.filter((item) => item.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="favorite-page-container">
      <Navbar />
      <h1>Your Favorites</h1>
      {favorites.length === 0 ? (
        <p className="empty-message">No favorite items found.</p>
      ) : (
        <div className="favorite-grid">
          {favorites.map((item) => (
            <div key={item.id} className="favorite-card">
              <img src={item.image} alt={item.name} className="favorite-image" />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p><strong>${item.price}</strong></p>
              <button
                className="remove-favorite-button"
                onClick={() => removeFromFavorites(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritePage;