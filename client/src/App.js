import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Connect from './components/Connect';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import SmartStockPage from './pages/SmartStockPage';
import SpendWisePage from './pages/SpendWisePage';
import LogStream360Page from './pages/LogStream360Page';
import ReviewMinerPage from './pages/ReviewMinerPage';
import TweetToTradePage from './pages/TweetToTradePage';

// Home component (your current main content)
const Home = ({ onHover }) => {
 const intros = [
  'Hello',
  'Hola',
  'Bonjour',
  'नमस्ते',
  'Ciao',
  'こんにちは',
  '你好',
  "👋 Hi, I'm Sarthak Choudhary"
 ];
 const [introIndex, setIntroIndex] = useState(0);
 const [bubbleClass, setBubbleClass] = useState('fade-in');

 useEffect(() => {
  if (introIndex >= intros.length - 1) {
   setBubbleClass('');
   return;
  }
  setBubbleClass('');
  const timer = setTimeout(() => {
   setIntroIndex(prevIndex => prevIndex + 1);
   setBubbleClass('fade-in');
  }, 800);
  return () => clearTimeout(timer);
 }, [introIndex, intros.length]);

 return (
  <>
   <div className="page-wrapper">
    <Navbar />

    {/* Floating Images - Using reliable placeholders */}
    
    

    {/* Main Content */}
    <div className="content-container">
     <div className={`intro-bubble ${bubbleClass}`}>
      {intros[introIndex]}
     </div>

     <div className="hero-content">
      <img
       src="https://raw.githubusercontent.com/Sarthak1904/portfoilio-new-images/refs/heads/main/_MG_0507.JPG"
       alt="Sarthak Choudhary"
       className="profile-pic"
      />
      <div className="main-title">
       SOFTWARE<br />
       DEVELOPMENT<br />
       ENGINEER
      </div>
      <div className="hero-images-right">
       <img
        src="https://raw.githubusercontent.com/Sarthak1904/portfoilio-new-images/refs/heads/main/PXL_20250413_205128481.jpg"
        alt="Floating scenic"
        className="floating-image image-top"
       />
       <img
        src="https://raw.githubusercontent.com/Sarthak1904/portfoilio-new-images/refs/heads/main/IMG_5485.JPG"
        alt="Floating scenic"
        className="floating-image image-bottom"
       />
      </div>
     </div>

     <div className="status-indicator">
      <span className="status-dot"></span>
      Actively looking for a full-time/contract position
     </div>

     <div className="button-group">
      <a href="#contact" className="btn btn-primary">Get in touch</a>
      <button className="btn btn-secondary">Resume</button>
     </div>
    </div>
   </div>
   <div id="work">
    <Projects onHover={onHover} />
   </div>
   <Experience />
   <div id="contact">
    <Connect />
   </div>
  </>
 );
};

function App() {
 // --- Cursor Logic ---
 const [cursorText, setCursorText] = useState('You');
 const [cursorStyle, setCursorStyle] = useState('');
 const [cursorColor, setCursorColor] = useState('rgba(37, 99, 235, 1)'); // Default blue
 const pointerRef = useRef(null);
 const bubbleRef = useRef(null);
 const mousePos = useRef({ x: 0, y: 0 });
 const pointerPos = useRef({ x: 0, y: 0 });
 const bubblePos = useRef({ x: 0, y: 0 });
 const animationFrameId = useRef(null);

 const handleProjectHover = (hovering, color) => {
  setCursorText(hovering ? 'View' : 'You');
  setCursorStyle(hovering ? 'project-hover' : '');
  if (hovering && color) {
   // Convert hex to rgba for glass effect
   const r = parseInt(color.slice(1, 3), 16);
   const g = parseInt(color.slice(3, 5), 16);
   const b = parseInt(color.slice(5, 7), 16);
   setCursorColor(`rgba(${r}, ${g}, ${b}, 0.7)`);
  } else {
   setCursorColor('rgba(37, 99, 235, 1)'); // Revert to default blue
  }
 };

 useEffect(() => {
  const handleMouseMove = (e) => {
   mousePos.current = { x: e.clientX, y: e.clientY };
  };

  const updateCursor = () => {
   const { x: targetX, y: targetY } = mousePos.current;

   // Pointer interpolation
   pointerPos.current.x += (targetX - pointerPos.current.x) * 0.6;
   pointerPos.current.y += (targetY - pointerPos.current.y) * 0.6;
   if (pointerRef.current) {
    pointerRef.current.style.transform = `translate(${pointerPos.current.x - 10}px, ${pointerPos.current.y - 10}px) rotate(45deg)`;
   }

   // Bubble interpolation
   bubblePos.current.x += (targetX - bubblePos.current.x) * 0.15;
   bubblePos.current.y += (targetY - bubblePos.current.y) * 0.15;
   if (bubbleRef.current) {
    bubbleRef.current.style.transform = `translate(${bubblePos.current.x}px, ${bubblePos.current.y}px)`;
   }

   animationFrameId.current = requestAnimationFrame(updateCursor);
  };

  window.addEventListener('mousemove', handleMouseMove);
  animationFrameId.current = requestAnimationFrame(updateCursor);

  return () => {
   window.removeEventListener('mousemove', handleMouseMove);
   cancelAnimationFrame(animationFrameId.current);
  };
 }, []);

 return (
  <Router>
   <div ref={pointerRef} className={`custom-cursor-pointer ${cursorStyle}`}></div>
   <div
    ref={bubbleRef}
    className={`custom-cursor-bubble ${cursorStyle}`}
    style={{ backgroundColor: cursorColor }}
   >
    {cursorText}
   </div>
  
   <Routes>
    <Route path="/" element={<Home onHover={handleProjectHover} />} />
    <Route path="/about" element={<About />} />
    <Route path="/work" element={<Work />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/projects/smartstock" element={<SmartStockPage />} />
    <Route path="/projects/spendwise" element={<SpendWisePage />} />
    <Route path="/projects/logstream360" element={<LogStream360Page />} />
    <Route path="/projects/reviewminer" element={<ReviewMinerPage />} />
    <Route path="/projects/tweet-to-trade" element={<TweetToTradePage />} />
   </Routes>
  </Router>
 );
}

export default App;