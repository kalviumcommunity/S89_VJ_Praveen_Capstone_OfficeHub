import React from 'react';
import Navbar from '../components/Navbar'; // Import Navbar
import '../styles/Ecommerce.css';



const Ecommerce = () => {
  const categories = [
    { id: 1, name: 'Clothing', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/blazer/w/y/g/l-v-ss-blk-darbar-in-original-imah3hhqbcbg9dzf.jpeg?q=70', link: '/clothing' },
    { id: 2, name: 'Laptops', image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/5/e/y/-original-imah5pcm59am3dk6.jpeg?q=70' },
    { id: 3, name: 'Footwear', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/w/d/o/-original-imah4a6hwmek7qve.jpeg?q=70' },
    { id: 4, name: 'Perfumes', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/perfume/o/f/h/-original-imaguaytyf2jdhz4.jpeg?q=70' },
    { id: 5, name: 'Watches', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/watch/w/b/d/1-ft3025-new-designer-square-dial-reboot-men-original-imahb7wzqm6gyf74.jpeg?q=70', link: '/watches' },
    { id: 6, name: 'Accessories', image: 'https://i.pinimg.com/736x/87/9a/f8/879af827e191ca255ddb31a9842b8296.jpg' },
    { id: 7, name: 'Stationary', image: 'https://i.pinimg.com/736x/28/eb/92/28eb921ac748fc9d47a1430247e92622.jpg' },
    { id: 8, name: 'Devices', image: 'https://i.pinimg.com/736x/e3/86/cc/e386ccc0b1134fc726729f8c42fa27b8.jpg' },
  ];

  return (
    <div className="ecommerce-container">
      <Navbar /> {/* Navbar imported and fixed */}
      <header className="ecommerce-header">
        <h1>OFFICE THINGS</h1>
        <p>Explore a variety of office essentials and shop for what you need.</p>
      </header>
      <section className="categories-section">
        <h2>Categories</h2>
        <div className="categories-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <img src={category.image} alt={category.name} className="category-image" />
              <h3>{category.name}</h3>
              {category.link ? (
                <a href={category.link} className="explore-button">
                  Explore
                </a>
              ) : (
                <button className="explore-button">Explore</button>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Ecommerce;