import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../src/styles/shoe.css'; 
import Navbar from '../components/Navbar';

const ShoePage = () => {
  const [shoes, setShoes] = useState([]);
  const [filteredShoes, setFilteredShoes] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchShoes = async () => {
      try {
        const response = await axios.get('http://localhost:3000/Shoe');
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
            <li onClick={() => handleBrandFilter('')} className={!selectedBrand ? 'active' : ''}>
              All Brands
            </li>
            {brands.map((brand) => (
              <li key={brand} onClick={() => handleBrandFilter(brand)} className={selectedBrand === brand ? 'active' : ''}>
                {brand}
              </li>
            ))}
          </ul>
        </aside>

        <div className="shoe-content">
          <div className="shoe-grid">
            {filteredShoes.map((shoe) => (
              <div key={shoe.id} className="shoe-card">
                <img src={shoe.image} alt={shoe.name} className="shoe-image" />
                <h3>{shoe.name}</h3>
                <p>{shoe.description}</p>
                <p><strong>${shoe.price}</strong></p>
                <button className="add-to-cart-button">Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoePage;
