import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import useInView from '../hooks/useInView';

const profileStats = [
  ['Age', '23'],
  ['Height', '5\'6"'],
  ['Weight', '50 kg'],
  ['City', 'Chennai'],
  ['Languages', 'Tamil / English / Telugu'],
  ['Skills', 'Dancing / Gymnastics / Stage'],
];

function ProfilePreview() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, 0.22);

  return (
    <section
      ref={sectionRef}
      id="profile-preview"
      className="profile-preview scene-section"
      style={{ '--section-art': "url('/profileimg.webp')" }}
    >
      <div className={`profile-preview-shell ${inView ? 'in-view' : ''}`}>
        <div className="profile-preview-media" aria-hidden="true">
          <img src="/profileimg.webp" alt="" loading="lazy" decoding="async" />
        </div>

        <div className="profile-preview-content">
          <span className="section-kicker">Casting Profile</span>
          <h2>Physical & Personal Details</h2>
          <p>
            A quick actor profile for casting teams, auditions, production calls, and collaborations.
          </p>

          <div className="profile-preview-grid">
            {profileStats.map(([label, value]) => (
              <div className="profile-preview-stat" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>

          <Link to="/profile" className="profile-preview-link">
            View Full Profile
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProfilePreview;
