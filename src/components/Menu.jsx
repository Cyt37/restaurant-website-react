import React from 'react';
import { loadCart, saveCart } from '../utils/cart';

const menuData = [
  { name: 'Bruschetta', desc: 'Grilled bread topped with tomato, garlic, and basil.', price: 8.50, category: 'Appetizers' },
  { name: 'Calamari', desc: 'Lightly fried squid with marinara sauce.', price: 10.00, category: 'Appetizers' },
  { name: 'Margherita Pizza', desc: 'Tomato, fresh mozzarella, basil, olive oil.', price: 14.00, category: 'Main Courses' },
  { name: 'Fettuccine Alfredo', desc: 'Creamy alfredo sauce with parmesan and parsley.', price: 16.50, category: 'Main Courses' },
  { name: 'Tiramisu', desc: 'Layers of mascarpone and espresso-soaked ladyfingers.', price: 7.00, category: 'Desserts' },
  { name: 'Panna Cotta', desc: 'Vanilla panna cotta with berry compote.', price: 6.50, category: 'Desserts' }
];
const categories = ['Appetizers','Main Courses','Desserts'];

export default function Menu() {
  const addToCart = item => {
    const cart = loadCart();
    cart[item.name] = cart[item.name] || { price: item.price, qty: 0 };
    cart[item.name].qty++;
    saveCart(cart);
  };

  return (
    <main className="menu-page container">
      <h1>Our Menu</h1>
      {categories.map(cat => (
        <div key={cat} className="menu-section">
          <h2>{cat}</h2>
          <div className="menu-items">
            {menuData.filter(i => i.category === cat).map(item => (
              <div key={item.name} className="menu-card">
                <h3>{item.name}</h3>
                <p className="desc">{item.desc}</p>
                <span className="price">${item.price.toFixed(2)}</span>
                <button className="add-to-cart" onClick={() => addToCart(item)}>+ Add</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
};
