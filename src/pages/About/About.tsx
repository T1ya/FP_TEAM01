import React, { useState } from 'react';
import './About.css';

const AboutUs: React.FC = () => {
  const [fullscreenSrc, setFullscreenSrc] = useState<string>('');

  const handleImageClick = (src: string) => setFullscreenSrc(src);
  const closeFullscreen = () => setFullscreenSrc('');

  return (
    <>
      {/* Карта на фоне */}
      <img
        className="background-map"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Carte_Coffea_robusta_arabic.svg/330px-Carte_Coffea_robusta_arabic.svg.png"
        alt="World Map with Sources"
      />

      {/* Основной контент поверх карты */}
      <div className="container">
        <h1>About Us</h1>

        <div className="section">
          <p>
            Welcome to <strong>Cozy Beans Coffee</strong> — your local coffee haven! We are a passionate team with years of experience in crafting and serving quality coffee. Our mission is to satisfy the diverse taste preferences of our valued customers through thoughtfully sourced ingredients and expertly prepared beverages.
          </p>
        </div>

        <div className="section">
          <h2>Origin of Our Ingredients</h2>
          <ul>
            <li><strong>Brazil:</strong> Source of rich, nutty Arabica beans.</li>
            <li><strong>Colombia:</strong> Known for balanced acidity and smooth blends.</li>
            <li><strong>Ethiopia:</strong> Origin of fruity and floral specialty beans.</li>
            <li><strong>India:</strong> Supplies spices like cardamom and cinnamon.</li>
            <li><strong>Madagascar:</strong> Known for pure, natural vanilla.</li>
            <li><strong>Local Dairy Farms:</strong> Fresh, high-quality milk and cream.</li>
          </ul>
        </div>

        <div className="section">
          <h2>Coffee Plantation Views</h2>
          <div className="image-section">
            {[
              {
                src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Coffee_Plantation.jpg/330px-Coffee_Plantation.jpg',
                alt: 'Brazil Coffee Plantation',
                label: 'Brazil'
              },
              {
                src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Cafe_Quimbaya_2005-08-27.jpg/330px-Cafe_Quimbaya_2005-08-27.jpg',
                alt: 'Colombia Coffee Plantation',
                label: 'Colombia'
              },
              {
                src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Ethiopia_Sidamo.jpg/330px-Ethiopia_Sidamo.jpg',
                alt: 'Ethiopia Coffee Plantation',
                label: 'Ethiopia'
              }
            ].map((image, idx) => (
              <div key={idx} className="image-card" onClick={() => handleImageClick(image.src)}>
                <img src={image.src} alt={image.alt} />
                <p>{image.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {fullscreenSrc && (
        <div className="fullscreen-overlay" onClick={closeFullscreen}>
          <img src={fullscreenSrc} alt="Fullscreen" />
        </div>
      )}
    </>
  );
};

export default AboutUs;
