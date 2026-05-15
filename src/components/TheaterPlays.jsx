import React, { useRef } from 'react';
import useInView from '../hooks/useInView';

const stageReel = {
  title: 'Stage Reel',
  href: 'https://www.instagram.com/reel/DXoqJYUEtCy/?igsh=MWpvOXViaDBuZnhteA==',
  embed: 'https://www.instagram.com/reel/DXoqJYUEtCy/embed',
};

const theaterAccess = [
  {
    title: 'Performance Stills',
    eyebrow: 'Photos',
    description: 'Stage presence, rehearsal moments, and performance frames.',
    href: 'https://www.instagram.com/p/CxiOnmmSzsQ/?img_index=1&igsh=eTY4M2tmbG8zaHMz',
    embed: 'https://www.instagram.com/p/CxiOnmmSzsQ/embed',
  },
];

function TheaterPlays() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, 0.12);
  const reelSrc = `${stageReel.embed}?autoplay=1&muted=1&utm_source=ig_embed`;

  return (
    <section
      ref={sectionRef}
      id="theater"
      className={`theater-plays scene-section ${inView ? 'is-active' : ''}`}
    >
      <div className={`theater-heading fade-up ${inView ? 'in-view' : ''}`}>
        <span>Theatre Work</span>
        <h2>Theater Plays</h2>
        <p>Stage movement, timing, and performance stills presented as a focused showcase.</p>
      </div>

      <div className={`theater-showcase scale-in ${inView ? 'in-view' : ''}`}>
        <article className="stage-reel-panel">
          <div className="theater-visual">
            {inView ? (
              <iframe
                title={stageReel.title}
                src={inView ? reelSrc : undefined}
                loading="eager"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="theater-video-placeholder" aria-hidden="true">
                <span>Stage Reel</span>
              </div>
            )}
            <div className="reel-status" aria-hidden="true">
              <span></span>
              {inView ? 'Reel loaded' : 'Scroll to load'}
            </div>
          </div>

          <div className="theater-card-meta">
            <span>Performance Reel</span>
            <h3>Live Stage Energy</h3>
            <p>Movement, timing, and stage presence from live theatre work.</p>
            <a href={stageReel.href} target="_blank" rel="noreferrer">Open reel</a>
          </div>
        </article>

        <aside className="theater-access" aria-label="Theater photos and links">
          {theaterAccess.map((item, index) => (
            <a
              className="theater-access-card"
              href={item.href}
              target="_blank"
              rel="noreferrer"
              key={item.href}
              style={{ '--access-index': String(index + 1).padStart(2, '0') }}
            >
              <iframe
                title={item.title}
                src={item.embed}
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
              <div className="theater-access-copy">
              <span>{item.eyebrow}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <strong>Open</strong>
              </div>
            </a>
          ))}
        </aside>
      </div>
    </section>
  );
}

export default TheaterPlays;
