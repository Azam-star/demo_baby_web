import React, { useEffect } from 'react';
import { 
  Baby, 
  Stethoscope, 
  Syringe, 
  HeartPulse, 
  Calendar, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle2 
} from 'lucide-react';
import './index.css';

function App() {
  // Add Google Font
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  return (
    <div>
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">
          <Baby size={32} />
          <span>TinySteps Clinic</span>
        </div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <a href="#book" className="btn btn-primary">Book Appointment</a>
      </nav>

      {/* Hero Section */}
      <section id="home" className="container hero">
        <div className="hero-content">
          <h1 className="title">Gentle Care for Your Little Ones</h1>
          <p className="subtitle">
            Expert pediatric care in a warm, welcoming environment. We're dedicated to your child's health, development, and happiness from day one.
          </p>
          <div className="hero-buttons">
            <a href="#book" className="btn btn-primary">Schedule Visit</a>
            <a href="#services" className="btn btn-secondary">Our Services</a>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="hero-blob"></div>
          {/* Using a placeholder high-quality image of a baby/pediatrician */}
          <img 
            src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Pediatrician with baby" 
            className="hero-image"
          />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">Comprehensive Pediatric Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <Stethoscope size={40} />
              </div>
              <h3>General Checkups</h3>
              <p>Regular wellness exams to track your child's growth, development, and overall health milestones.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <Syringe size={40} />
              </div>
              <h3>Vaccinations</h3>
              <p>Complete immunization schedules to protect your child from preventable diseases in a gentle manner.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <HeartPulse size={40} />
              </div>
              <h3>Newborn Care</h3>
              <p>Specialized care for the newest members of your family, supporting both baby and parents.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <Baby size={40} />
              </div>
              <h3>Development Tracking</h3>
              <p>Monitoring physical, cognitive, and emotional milestones to ensure healthy progression.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="info-section">
        <div className="container info-grid">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1519689680058-324335c77eba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Happy baby" 
              className="info-image"
            />
          </div>
          <div>
            <h2 className="title" style={{ fontSize: '2.5rem' }}>Why Parents Trust Us</h2>
            <p className="subtitle">
              We understand that choosing a pediatrician is one of the most important decisions you make for your child.
            </p>
            <ul className="info-list">
              <li>
                <CheckCircle2 className="info-list-icon" size={24} />
                <span>Board-certified pediatric specialists</span>
              </li>
              <li>
                <CheckCircle2 className="info-list-icon" size={24} />
                <span>Child-friendly, stress-free environment</span>
              </li>
              <li>
                <CheckCircle2 className="info-list-icon" size={24} />
                <span>Same-day sick appointments available</span>
              </li>
              <li>
                <CheckCircle2 className="info-list-icon" size={24} />
                <span>24/7 on-call nurse advice line</span>
              </li>
            </ul>
            <br />
            <a href="#about" className="btn btn-primary">Meet Our Doctors</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <div className="logo" style={{ color: 'white', marginBottom: '1.5rem' }}>
                <Baby size={28} />
                <span>TinySteps</span>
              </div>
              <p>Providing compassionate, expert care for children from birth through adolescence.</p>
            </div>
            
            <div className="footer-column">
              <h4>Contact Us</h4>
              <p><Phone size={18} /> (555) 123-4567</p>
              <p><MapPin size={18} /> 123 Pediatric Way, Medical District</p>
              <p><a href="mailto:hello@tinysteps.com" style={{ color: '#aaaaaa', textDecoration: 'none' }}>hello@tinysteps.com</a></p>
            </div>
            
            <div className="footer-column">
              <h4>Hours</h4>
              <p><Clock size={18} /> Mon-Fri: 8:00 AM - 6:00 PM</p>
              <p><Clock size={18} /> Sat: 9:00 AM - 1:00 PM</p>
              <p><Clock size={18} /> Sun: Closed</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} TinySteps Pediatric Clinic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
