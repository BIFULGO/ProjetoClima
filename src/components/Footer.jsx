import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Meu Site de Clima</p>
    </footer>
  );
}

export default Footer;