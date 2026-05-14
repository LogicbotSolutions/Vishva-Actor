import React, { useRef } from 'react';
import useInView from '../hooks/useInView';

const contactCards = [
  {
    label: 'Casting & Bookings',
    value: 'contactactorvishva@gmail.com',
    href: 'mailto:contactactorvishva@gmail.com?subject=Casting%20Enquiry%20for%20Vishva',
  },
  {
    label: 'Instagram',
    value: '@vishva_actor',
    href: 'https://www.instagram.com/vishva_actor/',
  },
  {
    label: 'Showreel',
    value: 'YouTube Channel',
    href: 'https://youtube.com/@vishva_actor7489?si=GL1yI_lf422lehX9',
  },
];

const quickFacts = ['Based in Chennai', 'Tamil · English · Telugu', 'Film · Series · Theatre'];

function Contact() {
  const contactRef = useRef(null);
  const inView = useInView(contactRef);

  return (
    <section id="contact" ref={contactRef} className={`contact scene-section ${inView ? 'is-visible in-view' : ''}`}>
      <div className="contact-shell">
        <div className="contact-kicker fade-up">For casting, collaborations, and stage enquiries</div>

        <div className="contact-layout">
          <div className={`contact-copy fade-left ${inView ? 'in-view' : ''}`}>
            <h2>Get In Touch</h2>
            <p>
              For roles, auditions, interviews, and professional collaborations, reach out with
              project details, shoot dates, language, and location.
            </p>
            <div className="contact-facts">
              {quickFacts.map((fact) => (
                <span key={fact}>{fact}</span>
              ))}
            </div>
          </div>

          <div className="contact-panel">
            {contactCards.map((item, index) => (
              <a
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                className={`contact-card fade-up ${inView ? 'in-view' : ''}`}
                style={{ transitionDelay: `${index * 0.14}s` }}
                key={item.label}
              >
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </a>
            ))}
          </div>
        </div>

        <p className={`contact-note fade-in ${inView ? 'in-view' : ''}`}>
          Please include a short brief and contact number for faster response.
        </p>
      </div>
    </section>
  );
}

export default Contact;
