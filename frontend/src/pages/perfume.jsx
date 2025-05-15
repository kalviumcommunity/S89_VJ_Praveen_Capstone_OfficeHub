import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../src/styles/perfume.css'; 
import Navbar from '../components/Navbar';


const PerfumePage = () => {
  const [perfumes, setPerfumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPerfume = async () => {
      try {
        const response = await axios.get('http://localhost:3000/perfume'); // Adjust base URL if needed
        setPerfumes(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load perfume.');
        setLoading(false);
      }
    };

    fetchPerfume();
  }, []);

  return (
    <div className="perfume-page-container">
      <Navbar/>
      <h1>perfume</h1>
      {loading && <p>Loading perfume...</p>}
      {error && <p className="error">{error}</p>}
      <div className="perfume-grid">
        {perfumes.map((perfume) => (
          <div key={perfume.id} className="perfume-card">
            <img src={perfume.image} alt={perfume.name} className="perfume-image" />
            <h3>{perfume.name}</h3>
            <p>{perfume.description}</p>
            <p><strong>${perfume.price}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerfumePage;
