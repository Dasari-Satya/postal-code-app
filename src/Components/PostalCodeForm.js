import React, { useState } from 'react';

const PostalCodeForm = ({ onFormSubmit }) => {
  const [postalCode, setPostalCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(postalCode);
  };

  return (
    <form onSubmit={handleSubmit} align="center">
      <input type="text" placeholder="Enter a Postal Code" value={postalCode} onChange={(e) => setPostalCode(e.target.value)}/>&nbsp;
      <button type="submit" className='btn btn-success'>Get Location Info</button>
    </form>
  );
};

export default PostalCodeForm;
