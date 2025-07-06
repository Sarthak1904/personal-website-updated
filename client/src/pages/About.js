import React from 'react';
import './About.css';
import Navbar from '../components/Navbar';
import ImageGrid from '../components/ImageGrid';
import Connect from '../components/Connect';
import { FaSpotify } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-page">
      <Navbar />

      <section className="hero-section">
        <div className="hero-grid-background"></div>
        <div className="hero-image-container">
          <div className="hero-image image-1">
            <img src="https://raw.githubusercontent.com/Sarthak1904/portfoilio-new-images/refs/heads/main/WhatsApp%20Image%202025-06-30%20at%2016.21.51_6576143a.jpg" alt="Man working at a desk" />
          </div>
          <div className="hero-image image-2">
            <img src="https://raw.githubusercontent.com/Sarthak1904/portfoilio-new-images/refs/heads/main/WhatsApp%20Image%202025-06-30%20at%2016.21.05_7fef3c47.jpg" alt="Street view of The Sphere in Las Vegas" />
          </div>
          <div className="hero-image image-3">
            <img src="https://raw.githubusercontent.com/Sarthak1904/portfoilio-new-images/refs/heads/main/AdobeStock_877031131.jpeg" alt="Dual monitor desk setup" />
          </div>
          <div className="hero-image image-4">
            <img src="https://raw.githubusercontent.com/Sarthak1904/portfoilio-new-images/refs/heads/main/AdobeStock_141008942.jpeg" alt="Coffee cup on a saucer" />
            <FaSpotify className="spotify-icon" />
          </div>
          <div className="hero-image image-5">
            <img src="https://raw.githubusercontent.com/Sarthak1904/portfoilio-new-images/refs/heads/main/WhatsApp%20Image%202025-06-30%20at%2016.20.33_d9980b49.jpg" alt="Man with a backpack hitchhiking" />
          </div>
        </div>

        <div className="hero-text-content">
          <h1>
            I craft clean code,
            <br />
            and chase muddy trails.
          </h1>
          <p>
            Writing scalable software with a love for clean architecture. Caffeinated, country-obsessed, and creatively off-center.
          </p>
        </div>
        <div className="hero-status">
          <span className="status-dot"></span>
          Actively looking for a full-time/contract position
        </div>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">Get in touch</a>
          <a href="#resume" className="btn btn-secondary">Resume</a>
        </div>
      </section>

      <section className="bio-section">
        <div className="bio-container">
          <div className="bio-text-content">
            <h2 className="bio-title">HEY !</h2>
            <p className="bio-pronunciation">
              /sar-thuck/
              <img src="https://raw.githubusercontent.com/Sarthak1904/portfoilio-new-images/f8f8f92ab3f283e7617e5f302265be0b35fbccfd/india.svg" alt="Indian Flag" className="flag-svg" />
              <img src="https://raw.githubusercontent.com/Sarthak1904/portfoilio-new-images/f8f8f92ab3f283e7617e5f302265be0b35fbccfd/usa.svg" alt="USA Flag" className="flag-svg" />
            </p>
            <p>
              I am Sarthak a Full Stack Developer and Machine Learning Enthusiast born in India and based in the US. I build solutions that simplify complex processes and create engaging experiences that leave a lasting impact. Above all, I develop to make technology more intuitive and human-centric, empowering people through innovation.
            </p>
            <p>
              My expertise lies in bridging the gap between humans and technology through thoughtful design, advanced algorithms, and data-driven insights, ensuring that every solution I create is both impactful and meaningful.
            </p>
            <div className="bio-status">
              <span className="status-dot"></span>
              Actively looking for a full-time/contract position
            </div>
          </div>
          <div className="bio-image-content">
            <img src="https://raw.githubusercontent.com/Sarthak1904/personal-website/refs/heads/main/sarthak%20about%20me%20.png" alt="An illustration of Sarthak" className="bio-image" />
          </div>
        </div>
      </section>
      <section className="approach-section">
        <div className="approach-container">
          <h2 className="approach-title">" Beyond Code: A Thoughtful Approach to Development "</h2>
          <p className="approach-subtitle">
            Coding isn't just about writing lines that compile—it's about solving the right problems with clarity and intent.
            In my approach, I go beyond code to deeply understand, thoughtfully design, and rigorously test every solution I build.
          </p>
          <div className="approach-grid">
            <div className="approach-item">
              <div className="approach-header">
                <span className="approach-number">01</span>
                <div className="approach-dots">
                  <span className="dot active"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
              <h3>Problem Finding</h3>
              <p>Every great solution begins with awareness. I believe in identifying the real problem—surfacing hidden issues, unmet needs, or inefficiencies that others might overlook.</p>
            </div>
            <div className="approach-item">
              <div className="approach-header">
                <span className="approach-number">02</span>
                <div className="approach-dots">
                  <span className="dot"></span>
                  <span className="dot active"></span>
                  <span className="dot"></span>
                </div>
              </div>
              <h3>Problem Framing</h3>
              <p>Once found, the problem must be framed clearly. I define its scope, understand its constraints, and rephrase it in a way that makes it actionable and solvable.</p>
            </div>
            <div className="approach-item">
              <div className="approach-header">
                <span className="approach-number">03</span>
                <div className="approach-dots">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot active"></span>
                </div>
              </div>
              <h3>Solution Shaping</h3>
              <p>With clarity comes creativity. I design thoughtful, scalable solutions—writing clean, modular code that addresses the heart of the problem, not just its symptoms.</p>
            </div>
          </div>
        </div>
      </section>
      <ImageGrid />
      <div id="contact" style={{ position: 'relative', zIndex: 20, backgroundColor: '#111', paddingTop: '6rem' }}>
        <Connect />
      </div>
    </div>
  );
};

export default About; 