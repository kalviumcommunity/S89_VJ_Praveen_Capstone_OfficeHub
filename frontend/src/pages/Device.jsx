import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../src/styles/Device.css';
import Navbar from '../components/Navbar';

const categories = ['Keyboards', 'Mouse', 'AirPods', 'Headphones'];

const DevicePage = () => {
  const [devices, setDevices] = useState([]);
  const [filteredDevices, setFilteredDevices] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDevice = async () => {
      try {
        const response = await axios.get('http://localhost:3000/devices');
        setDevices(response.data);
        setFilteredDevices(response.data);
      } catch (err) {
        setError('Failed to load devices.');
      } finally {
        setLoading(false);
      }
    };

    fetchDevice();
  }, []);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(favs.map(fav => fav.id));
  }, []);

  const toggleFavorite = (device) => {
    const stored = JSON.parse(localStorage.getItem('favorites')) || [];
    const exists = stored.find((fav) => fav.id === device.id);

    let updated;
    if (exists) {
      updated = stored.filter((fav) => fav.id !== device.id);
    } else {
      updated = [...stored, device];
    }
    localStorage.setItem('favorites', JSON.stringify(updated));
    setFavorites(updated.map((fav) => fav.id));
  };

  const addToCart = (device) => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const exists = storedCart.find(item => item.id === device.id);
    let updatedCart;
    if (exists) {
      updatedCart = storedCart.map(item =>
        item.id === device.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      );
    } else {
      updatedCart = [...storedCart, { ...device, quantity: 1 }];
    }
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.location.href = '/cart';
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    if (category === '') {
      setFilteredDevices(devices);
    } else {
      setFilteredDevices(devices.filter((d) => d.brand && d.brand.toLowerCase() === category.toLowerCase()));
    }
  };

  return (
    <div className="device-page-container">
      <Navbar />

      <div className="device-layout">
        {/* Sidebar Filter */}
        <aside className="device-filter">
          <h3>Filter by Brand</h3>
          <ul>
            <li
              onClick={() => handleCategoryFilter('')}
              className={selectedCategory === '' ? 'active' : ''}
            >
              All
            </li>
            {categories.map((cat) => (
              <li
                key={cat}
                onClick={() => handleCategoryFilter(cat)}
                className={selectedCategory === cat ? 'active' : ''}
              >
                {cat}
              </li>
            ))}
          </ul>
        </aside>

        <main className="device-content">
          <h1>Devices</h1>
          {loading && <p>Loading devices...</p>}
          {error && <p className="error">{error}</p>}

          <div className="device-grid">
            {filteredDevices.map((device) => (
              <div
                key={device.id}
                className="device-card"
                style={{ cursor: 'pointer', position: 'relative' }}
                onClick={() => navigate(`/item/device/${device.id}`)}
              >
                <div
                  className="favorite-toggle"
                  onClick={e => { e.stopPropagation(); toggleFavorite(device); }}
                  title="Toggle Favorite"
                >
                  {favorites.includes(device.id) ? '❤️' : '🤍'}
                </div>
                <img src={device.image} alt={device.name} className="device-image" />
                <h3>{device.name}</h3>
                <p>{device.description}</p>
                <strong>${device.price}</strong>
                <button
                  className="add-to-cart-button"
                  onClick={e => { e.stopPropagation(); addToCart(device); }}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DevicePage;
