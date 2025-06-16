import React from "react";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ItemCard = ({ item }) => {
  const navigate = useNavigate();

  const handleFavoriteClick = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    // Prevent duplicates
    if (!favorites.find(fav => fav.id === item.id)) {
      favorites.push(item);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
    navigate('/favorites');
  };

  return (
    <div>
      <div>{item.name || item.title}</div>
      <FaHeart
        style={{ cursor: 'pointer', color: 'red' }}
        onClick={handleFavoriteClick}
      />
    </div>
  );
};

export default ItemCard;