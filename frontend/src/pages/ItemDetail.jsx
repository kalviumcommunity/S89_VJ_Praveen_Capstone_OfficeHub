import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const endpoints = {
  laptop: 'laptop',
  shoe: 'Shoe',
  device: 'devices',
  perfume: 'perfume',
  accessory: 'accessory',
  stationary: 'stationary',
  watch: 'watche'
};

const ItemDetail = () => {
  const { type, id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const endpoint = endpoints[type];
        if (!endpoint) {
          setError('Invalid item type.');
          setLoading(false);
          return;
        }
        const response = await fetch(`https://s89-vj-praveen-capstone-officehub-6.onrender.com/${endpoint}`);
        const data = await response.json();
        const found = data.find((i) => String(i.id) === String(id));
        if (found) {
          setItem(found);
        } else {
          setError('Item not found.');
        }
      } catch (err) {
        setError('Failed to load item.');
      } finally {
        setLoading(false);
      }
    };
    fetchItem();
  }, [type, id]);

  const addToCart = () => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const exists = storedCart.find(cartItem => cartItem.id === item.id);
    let updatedCart;
    if (exists) {
      updatedCart = storedCart.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 } : cartItem
      );
    } else {
      updatedCart = [...storedCart, { ...item, quantity: 1 }];
    }
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.location.href = '/cart';
  };

  if (loading) return <div><Navbar /><p>Loading...</p></div>;
  if (error) return <div><Navbar /><p className="error">{error}</p></div>;
  if (!item) return null;

  return (
    <div>
      <Navbar />
      <div style={{
        maxWidth: 600,
        margin: '2rem auto',
        background: '#fff',
        borderRadius: '1rem',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        padding: '2rem',
        textAlign: 'center'
      }}>
        <img src={item.image} alt={item.name || item.title} style={{ width: 240, height: 240, objectFit: 'contain', borderRadius: '1rem', marginBottom: '1.5rem' }} />
        <h2>{item.name || item.title}</h2>
        <p>{item.description}</p>
        <p><strong>${item.price}</strong></p>
        <button
          className="add-to-cart-button"
          style={{
            background: '#0fbedd',
            color: '#fff',
            border: 'none',
            borderRadius: '0.5rem',
            padding: '0.7rem 1.5rem',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            marginTop: '1rem',
            cursor: 'pointer'
          }}
          onClick={addToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;