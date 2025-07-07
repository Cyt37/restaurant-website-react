import React, { useState, useEffect } from 'react';

const slideImages = [
  'tomato-bruschetta.png',
  'Calamari2.png',
  'pizza.png',
  'fettuccine.png',
  'Tiramisu.png',
  'panna.png'
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setCurrent(i => (i + 1) % slideImages.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="gallery-section">
      <h2>Our Gallery</h2>
      <div className="slider-container">
        {slideImages.map((src, i) => (
          <div key={i} className={i === current ? 'slide active' : 'slide'}>
            <img src={`/images/${src}`} alt={`Dish ${i + 1}`} />
          </div>
        ))}
        <button className="prev" onClick={() => setCurrent((current - 1 + slideImages.length) % slideImages.length)}>&#10094;</button>
        <button className="next" onClick={() => setCurrent((current + 1) % slideImages.length)}>&#10095;</button>
      </div>
    </section>
  );
}