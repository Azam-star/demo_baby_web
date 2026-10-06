import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Baby, Phone, Building, MessageCircle } from 'lucide-react';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import './index.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">
      <Baby size={32} />
      <span>Rainbow Pediatrics</span>
    </div>
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/doctors">Our Specialists</Link>
      <Link to="/#conditions">Conditions Treated</Link>
      <Link to="/#facilities">Facilities</Link>
    </div>
    <a href="tel:18005437227" className="contact-btn">
      <Phone size={18} />
      <span>1800-KIDS-CARE</span>
    </a>
  </nav>
);

const Footer = () => (
  <footer className="footer" id="hospitals">
    <div className="container">
      <div className="footer-grid">
        <div className="footer-about">
          <div className="logo" style={{ color: 'white' }}>
            <Baby size={28} />
            <span>Rainbow Pediatrics</span>
          </div>
          <p>India's leading chain of pediatric and maternity hospitals, committed to providing world-class healthcare for women and children since 1999.</p>
        </div>
        
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/doctors">Our Doctors</Link></li>
          </ul>
        </div>
        
        <div>
          <h4>Our Locations (Chennai)</h4>
          <ul>
            <li><a href="#">Guindy</a></li>
            <li><a href="#">Sholinganallur</a></li>
            <li><a href="#">Anna Nagar</a></li>
          </ul>
        </div>

        <div>
          <h4>Contact Us</h4>
          <ul className="footer-contact">
            <li>
              <Phone size={16} />
              <span>1800-KIDS-CARE <br/> (1800-5437-227)</span>
            </li>
            <li>
              <Building size={16} />
              <span>Corporate Office: Road No 2, Banjara Hills, Hyderabad, Telangana - 500034</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Rainbow Children's Medicare Limited. All rights reserved. | Privacy Policy | Terms of Use</p>
      </div>
    </div>
  </footer>
);

const FloatingCTAs = () => (
  <div className="floating-ctas">
    <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
      <MessageCircle size={28} />
    </a>
    <div className="mobile-sticky-cta">
      <a href="tel:18005437227" className="mobile-btn call-btn">
        <Phone size={20} />
        <span>Call Now</span>
      </a>
      <a href="#book" className="mobile-btn book-btn" onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}>
        <span>Book Appt</span>
      </a>
    </div>
  </div>
);

function App() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctors" element={<Doctors />} />
          </Routes>
        </main>
        <Footer />
        <FloatingCTAs />
      </div>
    </Router>
  );
}

export default App;
