import React from 'react';
import { Star, MapPin } from 'lucide-react';

const Doctors = () => {
  const doctorsList = [
    {
      id: 1,
      name: "Dr. Sarah Jenkins",
      title: "Senior Pediatrician & Neonatologist",
      exp: "15+ Years",
      location: "Guindy",
      img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      title: "Pediatric Cardiologist",
      exp: "12+ Years",
      location: "Anna Nagar",
      img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      name: "Dr. Emily Roberts",
      title: "Pediatric Neurologist",
      exp: "10+ Years",
      location: "Sholinganallur",
      img: "https://images.unsplash.com/photo-1594824436998-d50d6ff71c4c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      name: "Dr. Arun Kumar",
      title: "Pediatric Surgeon",
      exp: "18+ Years",
      location: "Guindy",
      img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5,
      name: "Dr. Lisa Wong",
      title: "Pediatric Gastroenterologist",
      exp: "9+ Years",
      location: "Anna Nagar",
      img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 6,
      name: "Dr. Vikram Singh",
      title: "General Pediatrician",
      exp: "14+ Years",
      location: "Sholinganallur",
      img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80" // reusing image for demo
    }
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <h1>Our Expert Specialists</h1>
          <p>Meet our highly qualified team of pediatricians and specialists dedicated to your child's well-being.</p>
        </div>
      </div>
      
      <section className="section bg-light">
        <div className="container">
          <div className="specialists-grid">
            {doctorsList.map((doc) => (
              <div className="doctor-card" key={doc.id}>
                <img src={doc.img} alt={doc.name} className="doctor-img" />
                <div className="doctor-info">
                  <h3>{doc.name}</h3>
                  <p>{doc.title}</p>
                  <p className="exp">{doc.exp} Experience</p>
                  
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem', color: 'var(--text-light)', fontSize: '0.9rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                      <Star size={16} color="#ffc107" fill="#ffc107" /> 4.9/5
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                      <MapPin size={16} color="var(--primary-color)" /> {doc.location}
                    </span>
                  </div>
                  
                  <button className="btn-submit">Book Appointment</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctors;
