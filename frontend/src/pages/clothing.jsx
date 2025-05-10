import React from 'react';
import '../styles/clothing.css'; 
import Navbar from '../components/Navbar'; // Reuse the CSS file for styling
import trousers from '../../../images/dress/men/trouser.png'; // Image for product 1
import tshirt from '../../../images/dress/men/hoodie.png'; // Image for product 2
import shirt from '../../../images/dress/men/formal.png'; // Image for product 3
import blazer from '../../../images/dress/men/blazer.png'; // Imae for product 5
import saree from '../../../images/dress/women/saree.png'; // Image for product 1
import top from '../../../images/dress/women/frock.png'; // Image for product 2
import party from '../../../images/dress/women/shirts.png'; // Image for product 3
import formal from '../../../images/dress/women/shir.webp'; // Imae for product 5
import trouser from '../../../images/dress/women/trousers.png'; // Image for product 1


const Clothing = () => {
  const menProducts = [
    { id: 1, name: 'Men’s Blazer', image: blazer },
    { id: 2, name: 'Men’s Shirt',  image: shirt },
    { id: 3, name: 'Men’s Trousers',  image: trousers},
    { id: 4, name: 'Men’s Hoodies',  image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/m/o/x/m-ss-6016-whitenvy-tazo-original-imah4wcxw2ksybme.jpeg?q=70' },
    { id: 5, name: 'Men’s T-Shirts',  image: tshirt },
  ];

  const womenProducts = [
    { id: 1, name: 'Women’s Tops',  image: top },
    { id: 2, name: 'Women’s Sarees',  image: saree },
    { id: 3, name: 'Women’s Partywear',  image: party },
    { id: 4, name: 'Women’s FormalShirts',  image: formal },
    { id: 5, name: 'Women’s Trousers',  image: trouser },
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
              <button className="explore-button">Explore</button>
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
              <button className="explore-button">Explore</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Clothing;