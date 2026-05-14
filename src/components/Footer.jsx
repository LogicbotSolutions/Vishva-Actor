import React, { useRef } from 'react';
import useInView from '../hooks/useInView';

function Footer() {
  const footerRef = useRef(null);
  const inView = useInView(footerRef);

  return (
    <footer ref={footerRef} className={inView ? 'in-view' : ''}>
      <div className="footer-divider"></div>
      <p className="footer-text">© 2026 VISHVA. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
