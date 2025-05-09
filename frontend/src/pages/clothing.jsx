import React from 'react';
import '../styles/clothing.css'; 
import Navbar from '../components/Navbar';// Reuse the CSS file for styling
import img1 from '../../../images/dress/men/blazer.png'

const Clothing = () => {
  const menProducts = [
    { id: 1, name: 'Men’s T-Shirt', price: '₹499', image: 'https://via.placeholder.com/150?text=T-Shirt' },
    { id: 2, name: 'Men’s Jeans', price: '₹999', image: 'https://via.placeholder.com/150?text=Jeans' },
    { id: 3, name: 'Men’s Jacket', price: '₹1,499', image: 'https://via.placeholder.com/150?text=Jacket' },
    { id: 4, name: 'Men’s Shoes', price: '₹1,299', image: 'https://via.placeholder.com/150?text=Shoes' },
    { id: 5, name: 'Men’s Watch', price: '₹2,499', image: 'https://via.placeholder.com/150?text=Watch' },
    { id: 6, name: 'Men’s Sunglasses', price: '₹799', image: 'https://via.placeholder.com/150?text=Sunglasses' },
  ];

  const womenProducts = [
    { id: 1, name: 'Women’s Dress', price: '₹1,299', image: 'https://via.placeholder.com/150?text=Dress' },
    { id: 2, name: 'Women’s Handbag', price: '₹999', image: 'https://via.placeholder.com/150?text=Handbag' },
    { id: 3, name: 'Women’s Shoes', price: '₹1,499', image: 'https://via.placeholder.com/150?text=Shoes' },
    { id: 4, name: 'Women’s Watch', price: '₹2,499', image: 'https://via.placeholder.com/150?text=Watch' },
    { id: 5, name: 'Women’s Sunglasses', price: '₹799', image: 'https://via.placeholder.com/150?text=Sunglasses' },
  ];

  return (
    <div className="clothing-container">
      <header className="clothing-header">
      <Navbar /> 
        <h1>Clothing</h1>
        <p>Explore the latest fashion for men and women.</p>
      </header>

      <section className="clothing-section">
        <h2>Men's Clothing</h2>
        <div className="product-grid">
          {menProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <button className="add-to-cart-button">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      <section className="clothing-section">
        <h2>Women's Clothing</h2>
        <div className="product-grid">
          {womenProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <button className="add-to-cart-button">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Clothing;