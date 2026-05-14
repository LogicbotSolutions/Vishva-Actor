import React, { useRef } from 'react';
import useInView from '../hooks/useInView';

const theaterItems = [
  {
    title: 'Theater Still',
    type: 'Photo Journal',
    description: 'Stage presence, rehearsal moments, and performance stills.',
    href: 'https://www.instagram.com/p/CxiOnmmSzsQ/?img_index=1&igsh=eTY4M2tmbG8zaHMz',
    embed: 'https://www.instagram.com/p/CxiOnmmSzsQ/embed',
  },
  {
    title: 'Stage Reel',
    type: 'Performance Reel',
    description: 'Movement, timing, and live performance energy.',
    href: 'https://www.instagram.com/reel/DXoqJYUEtCy/?igsh=MWpvOXViaDBuZnhteA==',
    embed: 'https://www.instagram.com/reel/DXoqJYUEtCy/embed',
    isVideo: true,
  },
];

function TheaterPlays() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef);

  return (
    <section ref={sectionRef} id="theater" className="theater-plays scene-section">
      <div className={`theater-heading fade-up ${inView ? 'in-view' : ''}`}>
        <span>Theatre Work</span>
        <h2>Theater Plays</h2>
        <p>Selected stage moments presented as a clean visual showcase. Open each piece on Instagram for the full post.</p>
      </div>

      <div className="theater-grid">
        {theaterItems.map((item, index) => (
          <article
            className={`theater-card scale-in ${inView ? 'in-view' : ''}`}
            style={{ transitionDelay: `${index * 0.16}s` }}
            key={item.href}
          >
            <div className="theater-visual">
              <iframe
                title={item.title}
                src={item.embed}
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
              {item.isVideo && <span className="play-mark">Play</span>}
            </div>
            <div className="theater-card-meta">
              <span>{item.type}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={item.href} target="_blank" rel="noreferrer">Open on Instagram</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TheaterPlays;
