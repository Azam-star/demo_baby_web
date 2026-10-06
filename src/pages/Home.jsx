import React, { useState } from 'react';
import { 
  Clock, CheckCircle2, Trophy, Stethoscope, 
  Syringe, Thermometer, Activity, Baby, Quote,
  ChevronDown, Building, HeartPulse, ShieldAlert,
  Play, Award, ShieldCheck
} from 'lucide-react';

const Home = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="hero-tag">
              <Clock size={16} />
              <span>OPD Timings: 08:00 AM - 08:00 PM</span>
            </div>
            <h1 className="title">Smaller the patient, <br/>more specialized the Care</h1>
            
            <div className="hero-badges">
              <div className="hero-badges-title">Comprehensive Pediatric Care for Every Stage of Childhood</div>
              <ul>
                <li><CheckCircle2 size={18} /> Asia's 1st Pediatric Hospital with Level 4 NICU</li>
                <li><CheckCircle2 size={18} /> 26+ Years of Pediatric Healthcare Excellence</li>
                <li><CheckCircle2 size={18} /> Trusted by 10 Million+ Families Worldwide</li>
                <li><CheckCircle2 size={18} /> 24/7 Pediatric Emergency & Trauma Care</li>
              </ul>
            </div>
            
            <div className="guinness-badge">
              <Trophy size={18} />
              <span>Guinness World Record Holder for the largest gathering of people born prematurely</span>
            </div>
          </div>
          
          <div className="hero-form-container" id="book">
            <div className="lead-form-card">
              <div className="lead-form-title">
                Book an appointment with our Pediatric Specialist Today!
              </div>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Full Name*" required />
                </div>
                <div className="form-group phone-group">
                  <input type="tel" className="form-control" placeholder="Mobile Number*" required />
                  <button type="button" className="btn-otp">Send OTP</button>
                </div>
                <div className="form-group">
                  <select className="form-control" required defaultValue="">
                    <option value="" disabled>Select Location</option>
                    <option value="chennai-guindy">Chennai - Guindy</option>
                    <option value="chennai-sholinganallur">Chennai - Sholinganallur</option>
                    <option value="chennai-annanagar">Chennai - Anna Nagar</option>
                  </select>
                </div>
                <div className="form-group">
                  <select className="form-control" required defaultValue="">
                    <option value="" disabled>Select Specialty</option>
                    <option value="pediatrics">General Pediatrics</option>
                    <option value="neonatology">Neonatology (NICU)</option>
                    <option value="neurology">Pediatric Neurology</option>
                  </select>
                </div>
                <button type="submit" className="btn-submit">Book Appointment</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner / Partners */}
      <section className="bg-light py-4 border-y">
        <div className="container">
          <div className="trust-banner">
            <div className="trust-item"><Award size={24} /> NABH Accredited</div>
            <div className="trust-item"><ShieldCheck size={24} /> JCI Gold Seal</div>
            <div className="trust-item"><ShieldCheck size={24} /> ISO 9001:2015</div>
            <div className="trust-item"><span>+</span> Cashless Insurance Available</div>
          </div>
        </div>
      </section>

      {/* Conditions Treated */}
      <section className="section" id="conditions">
        <div className="container">
          <h2 className="section-title">Conditions <span>Treated</span></h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <Thermometer size={32} />
              </div>
              <h3>General Pediatrics</h3>
              <p>Comprehensive care for common childhood illnesses and routine health management.</p>
              <ul>
                <li><CheckCircle2 size={16} /> Viral Fevers & Infections</li>
                <li><CheckCircle2 size={16} /> Respiratory Issues</li>
                <li><CheckCircle2 size={16} /> Digestive & GI Problems</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <Baby size={32} />
              </div>
              <h3>Neonatology</h3>
              <p>Specialized Level 4 NICU care for premature and critically ill newborns.</p>
              <ul>
                <li><CheckCircle2 size={16} /> Premature Birth Care</li>
                <li><CheckCircle2 size={16} /> Congenital Anomalies</li>
                <li><CheckCircle2 size={16} /> Neonatal Jaundice</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <Activity size={32} />
              </div>
              <h3>Pediatric Sub-Specialties</h3>
              <p>Advanced diagnostic and therapeutic care for complex medical conditions.</p>
              <ul>
                <li><CheckCircle2 size={16} /> Pediatric Neurology</li>
                <li><CheckCircle2 size={16} /> Pediatric Cardiology</li>
                <li><CheckCircle2 size={16} /> Pediatric Endocrinology</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Tour / Video */}
      <section className="section bg-light" id="virtual-tour">
        <div className="container">
          <div className="virtual-tour-grid">
            <div className="virtual-tour-text">
              <h2 className="title" style={{ fontSize: '2.5rem' }}>Experience our Child-Friendly Environment</h2>
              <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                We believe that healing happens faster in a stress-free, engaging environment. Take a virtual tour of our state-of-the-art facilities designed specifically for kids.
              </p>
              <button className="btn-submit" style={{ width: 'auto', padding: '0.8rem 2rem' }}>View Gallery</button>
            </div>
            <div className="video-container">
              <div className="video-placeholder">
                <Play size={64} className="play-icon" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section" id="faq">
        <div className="container">
          <h2 className="section-title">Frequently Asked <span>Questions</span></h2>
          <div className="faq-list">
            {[
              {
                q: "What are your OPD timings?",
                a: "Our regular Outpatient Department (OPD) operates from 8:00 AM to 8:00 PM, Monday through Saturday. However, our emergency and trauma care services are available 24/7."
              },
              {
                q: "Do you offer emergency pediatric services?",
                a: "Yes, we have a dedicated 24/7 Pediatric Emergency Response team equipped with advanced life support systems, ready to handle all medical emergencies."
              },
              {
                q: "Do you accept health insurance?",
                a: "Yes, we have tie-ups with all major health insurance providers (TPA) for cashless hospitalization. Please contact our insurance desk for specifics."
              }
            ].map((faq, index) => (
              <div key={index} className={`faq-item ${activeFaq === index ? 'active' : ''}`}>
                <button className="faq-question" onClick={() => toggleFaq(index)}>
                  {faq.q}
                  <ChevronDown size={20} style={{ transform: activeFaq === index ? 'rotate(180deg)' : 'none', transition: '0.3s' }} />
                </button>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
