import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('cart')) || [];
    setItems(stored);
  }, []);

  const removeItem = (index) => {
    const updated = items.filter((_, i) => i !== index);
    setItems(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
    window.dispatchEvent(new Event("storage")); // update Front cart count
  };

  const clearCart = () => {
    localStorage.removeItem('cart');
    setItems([]);
    window.dispatchEvent(new Event("storage"));
  };

  const handleBuyNow = (item) => {
    navigate('/purchase', { state: item });
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛒 Your Cart</h2>
      {items.length === 0 ? (
        <p className="empty-cart">No items in cart.</p>
      ) : (
        <>
          {items.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>Cost: {item.cost}</p>
                <p>Offer ends in: {item.offerDays}</p>
                <button className="remove-btn" onClick={() => removeItem(index)}>Remove</button>
                <button className="buy-btn" onClick={() => handleBuyNow(item)}>Buy Now</button>
              </div>
            </div>
          ))}
          <button className="clear-btn" onClick={clearCart}>Clear All</button>
        </>
      )}
    </div>
  );
};

export default Cart;
