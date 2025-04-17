import React from 'react';
import { useNavigate } from 'react-router-dom';

const Purchase = () => {
  const navigate=useNavigate();
  return (
    <div className="purchase-container">
      <h2>Welcome to the Purchase Page!</h2>
      <p>Now you can make your purchases here.</p>
      <button onClick={()=>navigate('/')}>Click here</button>
    </div>
  );
};

export default Purchase;
