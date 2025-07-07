
import React from 'react';
import { loadCart, saveCart } from '../utils/cart';

const menuData = [
  {
    name: 'Bruschetta',
    desc: 'Grilled bread topped with tomato, garlic, and basil.',
    price: 8.5,
    category: 'Appetizers',
    img: '/images/tomato-bruschetta.png'
  },
  {
    name: 'Calamari',
    desc: 'Lightly fried squid with marinara sauce.',
    price: 10.0,
    category: 'Appetizers',
    img: '/images/Calamari2.png'
  },
  {
    name: 'Margherita Pizza',
    desc: 'Tomato, fresh mozzarella, basil, olive oil.',
    price: 14.0,
    category: 'Main Courses',
    img: '/images/pizza.png'
  },
  {
    name: 'Fettuccine Alfredo',
    desc: 'Creamy alfredo sauce with parmesan and parsley.',
    price: 16.5,
    category: 'Main Courses',
    img: '/images/fettuccine.png'
  },
  {
    name: 'Tiramisu',
    desc: 'Layers of mascarpone and espresso-soaked ladyfingers.',
    price: 7.0,
    category: 'Desserts',
    img: '/images/Tiramisu.png'
  },
  {
    name: 'Panna Cotta',
    desc: 'Vanilla panna cotta with berry compote.',
    price: 6.5,
    category: 'Desserts',
    img: '/images/panna.png'
  }
];
const categories = ['Appetizers', 'Main Courses', 'Desserts'];

export default function Menu() {
  const addToCart = item => {
    const cart = loadCart() || {};
    cart[item.name] = cart[item.name] || { price: item.price, qty: 0 };
    cart[item.name].qty++;
    saveCart(cart);
  };

  return (
    <main className="container py-5">
      <h1 className="mb-4 text-primary text-center">Our Menu</h1>
      {categories.map(cat => (
        <section key={cat} className="mb-5">
          <h2 className="h3 mb-3">{cat}</h2>

          {/* Center the row even if it's not full */}
          <div className="row g-4 justify-content-center">
            {menuData
              .filter(item => item.category === cat)
              .map(item => (
                <div
                  key={item.name}
                  className="col-12 col-sm-8 col-md-6 col-lg-4"
                >
                  <div className="card h-100 shadow-sm">
                    {/* fixed-height + cover */}
                    <img
                      src={process.env.PUBLIC_URL + item.img}
                      className="card-img-top"
                      alt={item.name}
                      style={{
                        height: '200px',
                        objectFit: 'cover',
                        borderTopLeftRadius: '.25rem',
                        borderTopRightRadius: '.25rem'
                      }}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text text-muted mb-4">
                        {item.desc}
                      </p>
                      <div className="mt-auto d-flex justify-content-between align-items-center">
                        <span className="fs-5">
                          ${item.price.toFixed(2)}
                        </span>
                        <button
                          className="btn btn-sm btn-outline-primary"
                          onClick={() => addToCart(item)}
                        >
                          + Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>
      ))}
    </main>
  );
}
