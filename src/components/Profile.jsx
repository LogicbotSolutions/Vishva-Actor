import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import useInView from '../hooks/useInView';
import './Profile.css';

const actingCredits = [
  { title: 'Rangoli', role: 'Abdul', year: '2024' },
  { title: 'Inspector Rishi', role: 'Sathya', year: '2024' },
  { title: 'SP Cinemas Series', role: 'Paun', year: '2024' },
  { title: 'Madras Matinee', role: 'Dinesh', year: '2024' },
  { title: 'Chennai Love Story', role: 'Vignash', year: '2024' },
];

const skills = ['Dancing', 'Gymnastics', 'Stage Acting'];

function Profile() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, 0.25);

  return (
    <div className="profile-page">
      <div className="profile-bg"></div>
      <div className="profile-container">
        <Link to="/" className="profile-back">Back to Site</Link>
        <header ref={headerRef} className={`profile-header ${headerInView ? 'in-view' : ''}`}>
          <div className="profile-portrait" aria-hidden="true">
            <img src="/profileimg.webp" alt="" loading="eager" fetchPriority="high" decoding="async" />
          </div>
          <div className="profile-hero-copy">
            <span className="profile-kicker">Actor Profile</span>
            <h1 className="profile-name">VISHVA</h1>
            <p className="profile-subtitle">Theatre Artist & Screen Actor</p>
            <p className="profile-intro">
              A concise casting profile for film, series, theatre, auditions, and professional collaborations.
            </p>
          </div>
        </header>

        <div className="profile-grid">
          <div className="profile-section">
            <h3 className="section-title gold-text">Physical Attributes</h3>
            <div className="attributes-grid">
              {[
                ['Age', '23'],
                ['Height', "5'6\""],
                ['Weight', '50 kg'],
                ['Complexion', 'Fair'],
                ['Eye Colour', 'Brown'],
                ['Hair Colour', 'Black'],
              ].map(([label, value]) => (
                <div className="attribute-item glass" key={label}>
                  <span className="attribute-label">{label}</span>
                  <span className="attribute-value">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="profile-section">
            <h3 className="section-title gold-text">Personal Details</h3>
            <div className="details-grid">
              {[
                ['Current City', 'Chennai'],
                ['Education', 'B.Com (Marketing)'],
                ['Languages', 'Tamil, English, Telugu'],
                ['Driving', '2 & 4 Wheeler'],
              ].map(([label, value]) => (
                <div className="detail-item glass" key={label}>
                  <span className="detail-label">{label}</span>
                  <span className="detail-value">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="profile-section full-width">
            <h3 className="section-title gold-text">Acting Credits</h3>
            <div className="credits-grid">
              {actingCredits.map((credit) => (
                <div className="credit-card glass" key={credit.title}>
                  <div className="credit-year">{credit.year}</div>
                  <h4 className="credit-title">{credit.title}</h4>
                  <p className="credit-role">as {credit.role}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="profile-section full-width">
            <h3 className="section-title gold-text">Special Skills</h3>
            <div className="skills-container">
              {skills.map((skill) => (
                <span className="skill-tag" key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
