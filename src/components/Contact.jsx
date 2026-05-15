import React, { useRef } from 'react';
import useInView from '../hooks/useInView';

const emailContact = {
  label: 'Casting & Bookings',
  value: 'contactactorvishva@gmail.com',
  href: 'mailto:contactactorvishva@gmail.com?subject=Casting%20Enquiry%20for%20Vishva',
};

const contactCards = [
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

const quickFacts = ['Based in Chennai', 'Tamil / English / Telugu', 'Film / Series / Theatre'];

function Contact() {
  const contactRef = useRef(null);
  const inView = useInView(contactRef);

  return (
    <section
      id="contact"
      ref={contactRef}
      className={`contact scene-section ${inView ? 'is-visible in-view' : ''}`}
    >
      <div className="contact-shell">
        <div className="contact-kicker fade-up">For casting, collaborations, and stage enquiries</div>

        <div className="contact-layout">
          <div className={`contact-copy fade-left ${inView ? 'in-view' : ''}`}>
            <h2>Get In Touch</h2>
            <p>
              For casting, auditions, interviews, and professional collaborations, email the
              project brief directly.
            </p>
            <div className="contact-facts">
              {quickFacts.map((fact) => (
                <span key={fact}>{fact}</span>
              ))}
            </div>
          </div>

          <div className="contact-panel">
            <a
              href={emailContact.href}
              className={`contact-card contact-card-primary fade-up ${inView ? 'in-view' : ''}`}
            >
              <span>{emailContact.label}</span>
              <strong>{emailContact.value}</strong>
              <em>Email for casting enquiry</em>
            </a>

            {contactCards.map((item, index) => (
              <a
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                className={`contact-card fade-up ${inView ? 'in-view' : ''}`}
                style={{ transitionDelay: `${(index + 1) * 0.14}s` }}
                key={item.label}
              >
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </a>
            ))}
          </div>
        </div>

        <p className={`contact-note fade-in ${inView ? 'in-view' : ''}`}>
          Email should include role, shoot dates, location, language, and contact number.
        </p>
      </div>
    </section>
  );
}

export default Contact;
