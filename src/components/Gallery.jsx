
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const IMAGES = [
  'tomato-bruschetta.png',
  'Calamari2.png',
  'pizza.png',
  'fettuccine.png',
  'Tiramisu.png',
  'panna.png',
];

export default function Gallery() {
  const settings = {
    dots: true,            // show the dots
    arrows: true,          // show the prev/next arrows
    infinite: true,
    speed: 500,            // slide animation duration (ms)
    slidesToShow: 3,       // show 3 slides at once
    slidesToScroll: 1,     // advance one slide per action
    autoplay: true,        // <-- enable auto-sliding
    autoplaySpeed: 3000,   // <-- time (ms) between auto slides
    pauseOnHover: true,    // pause when user hovers
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center text-primary mb-4">Our Gallery</h2>
        <Slider {...settings}>
          {IMAGES.map((filename, idx) => (
            <div key={idx} className="px-2">
              <div className="card border-0 shadow-sm">
                <img
                  src={process.env.PUBLIC_URL + `/images/${filename}`}
                  alt={`Dish ${idx + 1}`}
                  className="card-img-top"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
