
import React, { useState, useEffect } from 'react';
import { loadCart, saveCart } from '../utils/cart';
import { Link } from 'react-router-dom';

export default function Cart() {
  const [cart, setCart] = useState({});

  useEffect(() => {
    setCart(loadCart() || {});
  }, []);

  const decrement = id => {
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

  const increment = id => {
    const item = cart[id];
    if (!item) return;
    const newCart = { ...cart, [id]: { ...item, qty: item.qty + 1 } };
    saveCart(newCart);
    setCart(newCart);
  };

  const remove = id => {
    const newCart = { ...cart };
    delete newCart[id];
    saveCart(newCart);
    setCart(newCart);
  };

  const clear = () => {
    saveCart({});
    setCart({});
  };

  const total = Object.values(cart)
    .reduce((sum, { price, qty }) => sum + price * qty, 0)
    .toFixed(2);

  return (
    <main className="container py-5">
      <h1 className="mb-4">Your Order</h1>

      <table className="table table-bordered align-middle">
        <thead className="table-light">
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th style={{ width: '150px' }}>Qty</th>
            <th>Subtotal</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(cart).map(([id, { price, qty }]) => (
            <tr key={id}>
              <td>{id}</td>
              <td>${price.toFixed(2)}</td>
<td className="align-middle text-center">
               <div className="d-inline-flex align-items-center justify-content-center">
                 <button
                   className="btn btn-sm btn-outline-secondary me-2"
                    onClick={() => decrement(id)}
                  >
                    –
                  </button>
                  <span className="mx-1">{qty}</span>
                 <button
                    className="btn btn-sm btn-outline-secondary ms-2"
                    onClick={() => increment(id)}
                 >
                    +
                  </button>
                </div>
              </td>
              <td>${(price * qty).toFixed(2)}</td>
              <td>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => remove(id)}
                >
                  ×
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="d-flex justify-content-between align-items-center mt-4">
        <h4>Total: ${total}</h4>
        <div>
          <button className="btn btn-outline-secondary me-3" onClick={clear}>
            Clear Cart
          </button>
          <button
            className="btn btn-primary"
            onClick={() => alert('Order placed!')}
          >
            Place Order
          </button>
        </div>
      </div>

      <div className="mt-4">
        <Link to="/menu" className="text-decoration-none">
          ← Continue Shopping
        </Link>
      </div>
    </main>
  );
}
