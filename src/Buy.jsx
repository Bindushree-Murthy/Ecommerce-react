import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Buy.css';
import { toast,ToastContainer } from 'react-toastify';

const Buy = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { image, cost, offerDays, name } = location.state;

  const cartfunction = () => {
    const item = { image, cost, offerDays, name };
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    toast.success('An item is added successfully!')


    // Refresh to trigger cart count update in Front.jsx
    window.dispatchEvent(new Event("storage"));
  };

  const buyfunction = () => {
    navigate('/register', { state: { image, cost, offerDays, name } });
  };

  return (
    <div className='back'>
      <ToastContainer/>
      <h1 className='buy'>Get Ready to Rock Your New Gear!</h1>
      <h1 className='bh1'>{name}</h1>
      <img src={image} alt="" className='bimg' />
      <div className='bflex'>
        <h2 className='longg'>Exclusive Discounts Up To 50% Off!</h2>
        <h4 className='lonn'>⭐⭐⭐⭐⭐ | 1000 reviews</h4><hr className='linee' /><br />
        <h2 className='bh2'>Cost: {cost}</h2>
        <h3>Offer ends in: <span className='bh4'>{offerDays}</span></h3><br /><hr className='linee' /><br />
        <div className='boxes'>
          <div className='bck' id='lefi'>
            <h3>Add to cart</h3>
            <button onClick={cartfunction} className='btn'>Cart</button>
          </div>
          <div className='bck'>
            <h3 id='leff'>Click below to purchase</h3>
            <button onClick={buyfunction} className='btn'>Purchase</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;
