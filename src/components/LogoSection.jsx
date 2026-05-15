import React, { useRef } from 'react';
import useInView from '../hooks/useInView';

const logos = [
  { name: 'MM.Logo.png', alt: 'Madras Matinee' },
  { name: 'RR.Logo.png', alt: 'Rangoli' },
  { name: 'IR.Logo.png', alt: 'Inspector Rishi' },
];

const allLogos = [...logos, ...logos, ...logos, ...logos];
const logoPath = (name) => `/image/optimized/${name.replace(/\.[^.]+$/, '')}-320.png`;
const logoSrcSet = (name) => `/image/optimized/${name.replace(/\.[^.]+$/, '')}-320.png 320w, /image/optimized/${name.replace(/\.[^.]+$/, '')}-640.png 640w`;
const remoteImage = (name) => `https://raw.githubusercontent.com/LogicbotSolutions/Vishva-Actor/main/image/${encodeURIComponent(name)}`;

function LogoSection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef);

  return (
    <section
      ref={sectionRef}
      className={`logo-section scene-section ${inView ? 'in-view' : ''}`}
      aria-label="Featured In"
    >
      <h2 className={`logo-label fade-up ${inView ? 'in-view' : ''}`}>Featured In</h2>
      <div className={`logo-ticker fade-up ${inView ? 'in-view' : ''}`}>
        <div className="logo-track">
          {allLogos.map((logo, index) => (
            <div key={`${logo.alt}-${index}`} className="logo-item">
              <img
                src={logoPath(logo.name)}
                srcSet={logoSrcSet(logo.name)}
                sizes="(max-width: 700px) 120px, 180px"
                alt={logo.alt}
                loading="lazy"
                decoding="async"
                onError={(event) => {
                  event.currentTarget.removeAttribute('srcset');
                  event.currentTarget.src = remoteImage(logo.name);
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
