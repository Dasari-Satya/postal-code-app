import React, { useState } from 'react';
import PostalCodeForm from './Components/PostalCodeForm';
import LocationInfo from './Components/LocationInfo';
import './App.css';
const App = () => {
  const [locationData, setLocationData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchLocationInfo = async (postalCode) => {
    setLoading(true);

    try {
      const response = await fetch(`https://api.zippopotam.us/in/${postalCode}`);
      if (!response.ok) {
        throw new Error('Invalid postal code.');
      }
      const data = await response.json();
      setLocationData(data);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setLocationData(null);
  };

  return (
    <div>
      <h1 align="center">Postal Code Location</h1>
      <PostalCodeForm onFormSubmit={fetchLocationInfo} />
      <LocationInfo locationData={locationData} loading={loading} error={error} onClear={handleClear} />
    </div>
  );
};

export default App;
