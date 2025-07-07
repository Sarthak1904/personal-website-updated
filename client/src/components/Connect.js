import React, { useState } from 'react';
import './Connect.css';
import { FiCopy } from 'react-icons/fi'; // Using react-icons for the copy icon

const Connect = () => {
  const [isCopied, setIsCopied] = useState(false);
  const email = 'sarthakchoudhary830@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <section className="connect-section">
      <div className="connect-content">
        <div className="connect-header">
          <h2>LIKE WHAT YOU SEE HERE?</h2>
          <div className="email-container" onClick={handleCopy}>
            <span>{isCopied ? 'Copied!' : email}</span>
            <FiCopy className="copy-icon" />
          </div>
        </div>
        <p className="connect-text">
          From concept to creation, let's make it happen! <br />
          Got an idea, opportunity, or just want to say hello? I'm always up for new adventures, fun collaborations, or even just a cup of coffee! 😄
        </p>
        <div className="connect-buttons">
          <a href="https://www.linkedin.com/in/sarchou/" className="btn-linkedin">LinkedIn</a>
          <a href="https://drive.google.com/file/d/1ZIA2plYnPdsRts08dncvPUdeOToLyF5s/view" className="btn-resume-dark">Resume</a>
        </div>
      </div>
    </section>
  );
};

export default Connect; 