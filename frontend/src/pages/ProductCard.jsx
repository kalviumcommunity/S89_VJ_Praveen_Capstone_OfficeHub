import { useState } from 'react';
import axios from 'axios';

function ProductCard({ product, userId, isFavorite, onFavoriteChange }) {
  const [favorite, setFavorite] = useState(isFavorite);

  const handleFavorite = async () => {
    if (favorite) {
      await axios.post('/favorite/remove', { userId, productId: product._id });
    } else {
      await axios.post('/favorite/add', { userId, productId: product._id });
    }
    setFavorite(!favorite);
    if (onFavoriteChange) onFavoriteChange();
  };

  return (
    <div className="product-card">
      {/* ...other product info... */}
      <span onClick={handleFavorite} style={{ cursor: 'pointer', color: favorite ? 'red' : 'grey' }}>
        {favorite ? '❤️' : '🤍'}
      </span>
    </div>
  );
}

export default ProductCard;