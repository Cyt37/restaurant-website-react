import React from 'react';

export default function About() {
  return (
    <main className="about-page container">
      <h1>About Us</h1>
      {/* add this wrapper so your CSS can take effect */}
      <div className="about-content">
        <p>
          Founded in 1974, Uncle Sammy has been serving the community for over 50 years. What started as a small
          family-owned eatery has flourished into a local favorite thanks to our passion for fresh ingredients and
          time-honored recipes. Our mission is to bring people together over great food and warm hospitality.
        </p>
        <br></br>
        <p>
          Specialties include artisan pizzas baked in our wood-fired oven, house-made pastas, and daily chef’s
          specials that highlight seasonal produce. Every dish is crafted using locally sourced ingredients
          whenever possible—this not only supports nearby farmers but also ensures the freshest possible flavors.
        </p>
        <br></br>
        <p>
          Whether you’re celebrating a special occasion or simply looking for a cozy dinner, our doors are always
          open. We believe good food unites families, friends, and neighbors, and we invite you to become part
          of our story.
        </p>
      </div>
    </main>
  );
}
