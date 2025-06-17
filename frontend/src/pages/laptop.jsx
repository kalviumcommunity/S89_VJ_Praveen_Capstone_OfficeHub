import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../src/styles/laptop.css'; 
import Navbar from '../components/Navbar';

const LaptopPage = () => {
  const [laptops, setLaptops] = useState([]);
  const [filteredLaptops, setFilteredLaptops] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLaptops = async () => {
      try {
        const response = await axios.get('https://s89-vj-praveen-capstone-officehub-6.onrender.com/laptop');
        const data = response.data;

        setLaptops(data);
        setFilteredLaptops(data);

        const uniqueBrands = [...new Set(data.map(item => item.brand))];
        setBrands(uniqueBrands);

        setLoading(false);
      } catch (err) {
        setError('Failed to load laptops.');
        setLoading(false);
      }
    };

    fetchLaptops();
  }, []);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(favs.map(fav => fav.id));
  }, []);

  const handleBrandFilter = (brand) => {
    setSelectedBrand(brand);
    if (brand === '') {
      setFilteredLaptops(laptops);
    } else {
      setFilteredLaptops(laptops.filter(laptop => laptop.brand === brand));
    }
  };

  const toggleFavorite = (laptop) => {
    const stored = JSON.parse(localStorage.getItem('favorites')) || [];
    const exists = stored.find(fav => fav.id === laptop.id);

    let updated;
    if (exists) {
      updated = stored.filter(fav => fav.id !== laptop.id);
    } else {
      updated = [...stored, laptop];
    }
    localStorage.setItem('favorites', JSON.stringify(updated));
    setFavorites(updated.map(fav => fav.id));
  };

  const addToCart = (laptop) => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const exists = storedCart.find(item => item.id === laptop.id);
    let updatedCart;
    if (exists) {
      updatedCart = storedCart.map(item =>
        item.id === laptop.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      );
    } else {
      updatedCart = [...storedCart, { ...laptop, quantity: 1 }];
    }
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.location.href = '/cart';
  };

  return (
    <div className="laptop-page-container">
      <Navbar />
      <h1>Laptops</h1>
      {loading && <p>Loading laptops...</p>}
      {error && <p className="error">{error}</p>}

      <div className="laptop-layout">
        {/* FILTER LEFT */}
        <aside className="laptop-filter">
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

        {/* CONTENT RIGHT */}
        <div className="laptop-content">
          <div className="laptop-grid">
            {filteredLaptops.map((laptop) => (
              <div
                key={laptop.id}
                className="laptop-card"
                style={{position: 'relative', cursor: 'pointer'}}
                onClick={() => navigate(`/item/laptop/${laptop.id}`)}
              >
                <div
                  className="favorite-toggle"
                  onClick={e => { e.stopPropagation(); toggleFavorite(laptop); }}
                  title="Toggle Favorite"
                >
                  {favorites.includes(laptop.id) ? '❤️' : '🤍'}
                </div>
                <img
                  src={laptop.image}
                  alt={laptop.name}
                  className="laptop-image"
                />
                <h3>{laptop.name}</h3>
                <p>{laptop.description}</p>
                <p><strong>${laptop.price}</strong></p>
                <button
                  className="add-to-cart-button"
                  onClick={e => { e.stopPropagation(); addToCart(laptop); }}
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

export default LaptopPage;
