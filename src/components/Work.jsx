import React, { useRef } from 'react';
import useInView from '../hooks/useInView';

const youtubeEmbed = (id) => (
  `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${id}&playsinline=1&rel=0&modestbranding=1`
);

const workItems = [
  {
    link: 'https://youtu.be/LohOGaqFw1g?si=obKj67vVk5-iHLI8',
    youtubeId: 'LohOGaqFw1g',
    title: 'Rangoli',
    role: 'Abdul',
    description: "Playing the friend of the lead character, exploring subtle emotions and contributing to the story's flow.",
  },
  {
    link: 'https://www.youtube.com/watch?v=4CKU89MI0_0',
    youtubeId: '4CKU89MI0_0',
    title: 'Inspector Rishi',
    role: 'Young Sathya',
    description: 'A young tribal boy, stepping into a unique character and experiencing a different side of storytelling.',
  },
  {
    link: 'https://youtu.be/F_LRE9Bfaw0?si=18SWDq1JgYtN2Kc-',
    youtubeId: 'F_LRE9Bfaw0',
    title: 'Madras Matinee',
    role: 'Dinesh',
    description: 'Son of Kaali Venkat, balancing simplicity with significant narrative impact.',
  },
];

function FilmCard({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <article
      ref={ref}
      className={`work-card fade-up ${inView ? 'in-view' : ''}`}
      style={{ transitionDelay: `${index * 0.2}s`, '--work-index': String(index + 1).padStart(2, '0') }}
    >
      <div className="work-thumbnail">
        <iframe
          className="work-embed"
          src={youtubeEmbed(item.youtubeId)}
          title={`${item.title} trailer`}
          allow="autoplay; encrypted-media; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
      <div className="work-info">
        <span className="work-kicker">Featured Credit</span>
        <h3 className="work-title">{item.title}</h3>
        <p className="work-role">{item.role}</p>
        <p className="work-description">{item.description}</p>
        <a href={item.link} target="_blank" rel="noreferrer" className="work-link">
          WATCH <span className="work-arrow">→</span>
        </a>
      </div>
    </article>
  );
}

function Work() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef);

  return (
    <section id="work" className="screening-room scene-section">
      <div ref={headingRef} className={`work-heading fade-up ${headingInView ? 'in-view' : ''}`}>
        <span></span>
        <div>
          <small>Selected Screen Work</small>
          <h2>The Screening Room</h2>
        </div>
        <span></span>
      </div>

      <div className={`work-swipe-cue fade-up ${headingInView ? 'in-view' : ''}`} aria-hidden="true">
        <span></span>
        <p>Swipe the reel</p>
        <span></span>
      </div>

      <div className="work-grid">
        {workItems.map((item, index) => (
          <FilmCard item={item} index={index} key={item.title} />
        ))}
      </div>
    </section>
  );
}

export default Work;
