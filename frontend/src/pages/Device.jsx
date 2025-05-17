import React, { useEffect, useState } from 'react';
import axios from 'axios';
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

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    if (category === '') {
      setFilteredDevices(devices);
    } else {
      setFilteredDevices(devices.filter((d) => d.brannd.toLowerCase() === category.toLowerCase()));
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
              <div key={device.id} className="device-card">
                <div
                  className="favorite-toggle"
                  onClick={() => toggleFavorite(device.id)}
                  title="Toggle Favorite"
                >
                  {favorites.includes(device.id) ? '❤️' : '🤍'}
                </div>
                <img src={device.image} alt={device.name} className="device-image" />
                <h3>{device.name}</h3>
                <p>{device.description}</p>
                <strong>${device.price}</strong>
                <button className="add-to-cart-button">Add to Cart</button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DevicePage;
