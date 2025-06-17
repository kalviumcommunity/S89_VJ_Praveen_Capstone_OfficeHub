import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../src/styles/shoe.css'; 
import Navbar from '../components/Navbar';

const ShoePage = () => {
  const [shoes, setShoes] = useState([]);
  const [filteredShoes, setFilteredShoes] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchShoes = async () => {
      try {
        const response = await axios.get('https://s89-vj-praveen-capstone-officehub-6.onrender.com/Shoe');
        const data = response.data;
        setShoes(data);
        setFilteredShoes(data);

        // Extract unique brands
        const uniqueBrands = [...new Set(data.map(item => item.brand))];
        setBrands(uniqueBrands);

        setLoading(false);
      } catch (err) {
        setError('Failed to load shoes.');
        setLoading(false);
      }
    };

    fetchShoes();
  }, []);
  
  const handleBrandFilter = (brand) => {
    setSelectedBrand(brand);
    if (brand === '') {
      setFilteredShoes(shoes);
    } else {
      setFilteredShoes(shoes.filter(shoe => shoe.brand === brand));
    }
  };

  // Store full shoe object in localStorage for favorites
  const toggleFavorite = (shoe) => {
    const stored = JSON.parse(localStorage.getItem('favorites')) || [];
    const exists = stored.find(fav => fav.id === shoe.id);

    let updated;
    if (exists) {
      updated = stored.filter(fav => fav.id !== shoe.id);
    } else {
      updated = [...stored, shoe];
    }
    localStorage.setItem('favorites', JSON.stringify(updated));
    setFavorites(updated.map(fav => fav.id));
  };

  // Add to cart and redirect to cart page
  const addToCart = (shoe) => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const exists = storedCart.find(item => item.id === shoe.id);
    let updatedCart;
    if (exists) {
      updatedCart = storedCart.map(item =>
        item.id === shoe.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      );
    } else {
      updatedCart = [...storedCart, { ...shoe, quantity: 1 }];
    }
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    // Redirect to cart page
    window.location.href = '/cart';
  };

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(favs.map(fav => fav.id));
  }, []);

  return (
    <div className="shoe-page-container">
      <Navbar />
      
      <h1>Shoes</h1>
      {loading && <p>Loading shoes...</p>}
      {error && <p className="error">{error}</p>}

      <div className="shoe-layout">
        <aside className="shoe-filter">
          <h3>Filter by Brand</h3>
          <ul>
            <li
              onClick={() => handleBrandFilter('')}
              className={!selectedBrand ? 'active' : ''}
            >
              All Brands
            </li>
            {brands.map((brand) => (
              <li
                key={brand}
                onClick={() => handleBrandFilter(brand)}
                className={selectedBrand === brand ? 'active' : ''}
              >
                {brand}
              </li>
            ))}
          </ul>
        </aside>

        <div className="shoe-content">
          <div className="shoe-grid">
            {filteredShoes.map((shoe) => (
              <div
                key={shoe.id}
                className="shoe-card"
                style={{ position: 'relative', cursor: 'pointer' }}
                onClick={() => navigate(`/item/shoe/${shoe.id}`)}
              >
                <div
                  className="favorite-toggle"
                  onClick={e => { e.stopPropagation(); toggleFavorite(shoe); }}
                  title="Toggle Favorite"
                >
                  {favorites.includes(shoe.id) ? '❤️' : '🤍'}
                </div>
                <img src={shoe.image} alt={shoe.name} className="shoe-image" />
                <h3>{shoe.name}</h3>
                <p>{shoe.description}</p>
                <p><strong>${shoe.price}</strong></p>
                <button
                  className="add-to-cart-button"
                  onClick={e => { e.stopPropagation(); addToCart(shoe); }}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoePage;
