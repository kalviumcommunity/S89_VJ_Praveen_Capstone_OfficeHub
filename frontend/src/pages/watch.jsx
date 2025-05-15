import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../src/styles/watch.css'; // Create this CSS file for custom styling

const WatchPage = () => {
  const [watches, setWatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchWatches = async () => {
      try {
        const response = await axios.get('http://localhost:3000/watche'); // Adjust base URL if needed
        setWatches(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load watches.');
        setLoading(false);
      }
    };

    fetchWatches();
  }, []);

  return (
    <div className="watch-page-container">
      <h1>Watches</h1>
      {loading && <p>Loading watches...</p>}
      {error && <p className="error">{error}</p>}
      <div className="watches-grid">
        {watches.map((watch) => (
          <div key={watch.id} className="watch-card">
            <img src={watch.image} alt={watch.name} className="watch-image" />
            <h3>{watch.name}</h3>
            <p>{watch.description}</p>
            <p><strong>${watch.price}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchPage;
