import React, { useEffect, useState } from "react";
import "../styles/Device.css"; // or Laptop.css, Shoe.css, etc.

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(favs);
  }, []);

  const handleRemove = (id) => {
    const updated = favorites.filter(item => item.id !== id);
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };

  return (
    <div className="device-page-container">
      <h1 style={{ color: "#1f2c47", marginBottom: "2rem" }}>Your Favorites</h1>
      {favorites.length === 0 ? (
        <p style={{ color: "#444", fontSize: "1.2rem" }}>
          You haven't added any items to your favorites yet.
        </p>
      ) : (
        <div className="device-grid">
          {favorites.map(item => (
            <div className="device-card" key={item.id} style={{ position: "relative" }}>
              <div className="favorite-icon" style={{ position: "absolute", top: 10, right: 10, fontSize: "1.5rem" }}>❤️</div>
              <img src={item.image} alt={item.name || item.title} className="device-image" />
              <h3>{item.name || item.title}</h3>
              <p>{item.description}</p>
              <p><strong>${item.price}</strong></p>
              <button
                className="remove-favorite-button"
                style={{
                  background: "#ff3c6f",
                  color: "#fff",
                  border: "none",
                  borderRadius: "0.5rem",
                  padding: "0.5rem 1rem",
                  cursor: "pointer",
                  marginTop: "0.5rem",
                  width: "90%",
                  maxWidth: "300px",
                  fontWeight: "bold",
                  fontSize: "1rem"
                }}
                onClick={() => handleRemove(item.id)}
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

export default FavoritesPage;