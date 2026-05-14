import React, { useRef } from 'react';
import useInView from '../hooks/useInView';

const logos = [
  { src: '/image/MM.Logo.png', alt: 'Madras Matinee' },
  { src: '/image/RR.Logo.png', alt: 'Rangoli' },
  { src: '/image/IR.Logo.png', alt: 'Inspector Rishi' },
];

const allLogos = [...logos, ...logos, ...logos, ...logos];
const remoteImage = (name) => `https://raw.githubusercontent.com/LogicbotSolutions/Vishva-Actor/main/image/${encodeURIComponent(name)}`;

function LogoSection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef);

  return (
    <section ref={sectionRef} className={`logo-section scene-section ${inView ? 'in-view' : ''}`} aria-label="Featured In">
      <h2 className={`logo-label fade-up ${inView ? 'in-view' : ''}`}>Featured In</h2>
      <div className={`logo-ticker fade-up ${inView ? 'in-view' : ''}`}>
        <div className="logo-track">
          {allLogos.map((logo, index) => (
            <div key={`${logo.alt}-${index}`} className="logo-item">
              <img
                src={logo.src}
                alt={logo.alt}
                onError={(event) => {
                  event.currentTarget.src = remoteImage(logo.src.replace('/image/', ''));
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LogoSection;
