import React, { useEffect, useState } from 'react';
import axios from 'axios';
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

  useEffect(() => {
    const fetchLaptops = async () => {
      try {
        const response = await axios.get('http://localhost:3000/laptop');
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

  const handleBrandFilter = (brand) => {
    setSelectedBrand(brand);
    if (brand === '') {
      setFilteredLaptops(laptops);
    } else {
      setFilteredLaptops(laptops.filter(laptop => laptop.brand === brand));
    }
  };

  const toggleFavorite = (id) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
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
              <div key={laptop.id} className="laptop-card" style={{position: 'relative'}}>
                <div
                  className="favorite-toggle"
                  onClick={() => toggleFavorite(laptop.id)}
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
                <button className="add-to-cart-button">Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaptopPage;
