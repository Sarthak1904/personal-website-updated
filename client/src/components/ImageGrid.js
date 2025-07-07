import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ImageGrid.css';

gsap.registerPlugin(ScrollTrigger);

const imageUrls = [
  'https://raw.githubusercontent.com/Sarthak1904/portfoilio-new-images/refs/heads/main/CompressImage.com/img1-min.webp',
  'https://raw.githubusercontent.com/Sarthak1904/portfoilio-new-images/refs/heads/main/CompressImage.com/img11-min.webp',
  'https://raw.githubusercontent.com/Sarthak1904/portfoilio-new-images/refs/heads/main/CompressImage.com/img4-min.webp',
  'https://raw.githubusercontent.com/Sarthak1904/portfoilio-new-images/refs/heads/main/CompressImage.com/img5-min.webp',
  'https://raw.githubusercontent.com/Sarthak1904/portfoilio-new-images/refs/heads/main/CompressImage.com/img6-min.webp',
  'https://raw.githubusercontent.com/Sarthak1904/portfoilio-new-images/refs/heads/main/CompressImage.com/img7-min.webp',
  'https://raw.githubusercontent.com/Sarthak1904/portfoilio-new-images/refs/heads/main/CompressImage.com/img8-min.webp',
  'https://raw.githubusercontent.com/Sarthak1904/portfoilio-new-images/refs/heads/main/CompressImage.com/img9-min.webp',
  'https://raw.githubusercontent.com/Sarthak1904/portfoilio-new-images/refs/heads/main/CompressImage.com/img3-min.webp',
  'https://raw.githubusercontent.com/Sarthak1904/portfoilio-new-images/refs/heads/main/CompressImage.com/img10-min.webp',
  'https://raw.githubusercontent.com/Sarthak1904/portfoilio-new-images/refs/heads/main/CompressImage.com/img12-min.webp',
  'https://raw.githubusercontent.com/Sarthak1904/portfoilio-new-images/refs/heads/main/CompressImage.com/img13-min.webp',
  'https://raw.githubusercontent.com/Sarthak1904/portfoilio-new-images/refs/heads/main/CompressImage.com/img14-min.webp',
  'https://raw.githubusercontent.com/Sarthak1904/portfoilio-new-images/refs/heads/main/CompressImage.com/img15-min.webp',
  'https://raw.githubusercontent.com/Sarthak1904/portfoilio-new-images/refs/heads/main/CompressImage.com/_MG_1978.webp'
];

// Generate an array of 14 images for the grid from the provided URL
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