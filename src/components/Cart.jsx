// File: src/components/Cart.jsx
import React, { useState, useEffect } from 'react';
import { loadCart, saveCart } from '../utils/cart';
import { Link } from 'react-router-dom';

export default function Cart() {
  const [cart, setCart] = useState({});

  // Load cart on mount
  useEffect(() => {
    setCart(loadCart() || {});
  }, []);

  // Decrement quantity (or remove if it hits zero)
  const decrement = (id) => {
    const item = cart[id];
    if (!item) return;
    const newCart = { ...cart };
    if (item.qty > 1) {
      newCart[id] = { ...item, qty: item.qty - 1 };
    } else {
      delete newCart[id];
    }
    saveCart(newCart);
    setCart(newCart);
  };

  // Increment quantity
  const increment = (id) => {
    const item = cart[id];
    if (!item) return;
    const newCart = {
      ...cart,
      [id]: { ...item, qty: item.qty + 1 }
    };
    saveCart(newCart);
    setCart(newCart);
  };

  // Remove entire line item
  const remove = (id) => {
    const newCart = { ...cart };
    delete newCart[id];
    saveCart(newCart);
    setCart(newCart);
  };

  // Clear everything
  const clear = () => {
    saveCart({});
    setCart({});
  };

  // Compute total
  const total = Object.values(cart)
    .reduce((sum, { price, qty }) => sum + price * qty, 0)
    .toFixed(2);

  return (
    <main className="cart-page container">
      <h1>Your Order</h1>

      <table className="cart-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Subtotal</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(cart).map(([id, { price, qty }]) => (
            <tr key={id}>
              {/* use the key as the item name */}
              <td>{id}</td>
              <td>${price.toFixed(2)}</td>
              <td>
                <button
                  className="qty-btn"
                  onClick={() => decrement(id)}
                  aria-label={`Remove one ${id}`}
                >
                  –
                </button>
                <span className="qty-number">{qty}</span>
                <button
                  className="qty-btn"
                  onClick={() => increment(id)}
                  aria-label={`Add one ${id}`}
                >
                  +
                </button>
              </td>
              <td>${(price * qty).toFixed(2)}</td>
              <td>
                <button
                  className="remove-btn"
                  onClick={() => remove(id)}
                  aria-label={`Remove ${id} entirely`}
                >
                  ×
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="cart-summary">
        <span className="cart-total">Total: ${total}</span>
        <button className="btn clear-btn" onClick={clear}>
          Clear Cart
        </button>
        <button
          className="btn order-btn"
          onClick={() => alert('Order placed!')}
        >
          Place Order
        </button>
      </div>
    </main>
  );
}
