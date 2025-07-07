import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ImageGrid.css';

gsap.registerPlugin(ScrollTrigger);

const imageUrls = [
  'https://raw.githubusercontent.com/Sarthak1904/portfoilio-new-images/main/WhatsApp%20Image%202025-06-30%20at%2016.24.12_98b0d38a.jpg',
  'https://raw.githubusercontent.com/Sarthak1904/portfoilio-new-images/main/img1.jpg',
  'https://raw.githubusercontent.com/Sarthak1904/portfoilio-new-images/refs/heads/main/img15.JPG',
  'https://raw.githubusercontent.com/Sarthak1904/portfoilio-new-images/refs/heads/main/img3.JPG',
  'https://raw.githubusercontent.com/Sarthak1904/portfoilio-new-images/refs/heads/main/img4.JPG',
  'https://raw.githubusercontent.com/Sarthak1904/portfoilio-new-images/refs/heads/main/img5.jpg',
  'https://raw.githubusercontent.com/Sarthak1904/portfoilio-new-images/main/img6.jpg',
  'https://raw.githubusercontent.com/Sarthak1904/portfoilio-new-images/main/img7.jpg',
  'https://raw.githubusercontent.com/Sarthak1904/portfoilio-new-images/main/img8.jpg',
  'https://raw.githubusercontent.com/Sarthak1904/portfoilio-new-images/main/img9.jpg',
  'https://raw.githubusercontent.com/Sarthak1904/portfoilio-new-images/main/img10.jpg',
  'https://raw.githubusercontent.com/Sarthak1904/portfoilio-new-images/main/img11.jpg',
  'https://raw.githubusercontent.com/Sarthak1904/portfoilio-new-images/main/img12.jpg',
  'https://raw.githubusercontent.com/Sarthak1904/portfoilio-new-images/main/img13.jpg',
  'https://raw.githubusercontent.com/Sarthak1904/portfoilio-new-images/refs/heads/main/img14.JPG',
];

// Generate an array of 15 images for the grid from the provided URLs
const images = imageUrls.map((url, index) => {
  const isCenter = index === 7; // The 8th image is the center one
  return {
    src: url,
    alt: `Image ${index + 1}`,
    isCenter: isCenter,
  };
});

const ImageGrid = () => {
  const containerRef = useRef(null);
  const gridRef = useRef(null);
  const centerImageRef = useRef(null);
  const otherImagesRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const otherImages = otherImagesRef.current;
      
      ScrollTrigger.create({
        trigger: gridRef.current,
        start: 'center center',
        end: '+=3000',
        pin: gridRef.current,
        scrub: 1.5,
        animation: gsap.timeline()
          .fromTo(centerImageRef.current, 
            { scale: 3, opacity: 1, transformOrigin: 'center center' },
            { scale: 1, ease: 'power1.inOut' }
          )
          .to(otherImages, 
            { opacity: 1, stagger: 0.05, ease: 'power1.inOut' }, 
            0 // Start at the same time as the zoom
          ),
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="image-grid-container">
      <div className="grid-intro-text">
        <p className="intro-subtitle">PLACES I TRAVEL TO FUEL MY CREATIVE CHARGE</p>
        <h2 className="intro-title">Snippets from my Recent Expedition</h2>
        <p className="intro-description">Travel that teaches empathy and brings me closer to the nature</p>
      </div>
      <div ref={gridRef} className="image-grid-wrapper">
        <div className="image-grid">
          {images.map((image, index) => {
            const isCenter = image.isCenter || false;
            return (
              <div
                key={index}
                className={`grid-item ${isCenter ? 'center-item' : ''}`}
                ref={el => {
                  if (isCenter) centerImageRef.current = el;
                  else otherImagesRef.current[index] = el;
                }}
              >
                <img src={image.src} alt={image.alt} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImageGrid; 