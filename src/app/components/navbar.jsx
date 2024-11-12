// components/Navbar.js
import Link from 'next/link';
import React from 'react';
import { secondary, textColor } from '../colors';

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.navItem}>
        <Link href="/" style={styles.navLink}>Inicio</Link>
      </div>
      <div style={styles.navItem}>
        <Link href="#about" style={styles.navLink}>Acerca de</Link>
      </div>
      <div style={styles.navItem}>
        <Link href="#contact" style={styles.navLink}>Contacto</Link>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    position: 'fixed',
    top: 0,
    width: '100%',
    backgroundColor: secondary,
    color: textColor,
    display: 'flex',
    justifyContent: 'center',
    padding: '10px 0',
    zIndex: 1000,
  },
  navItem: {
    margin: '0 15px',
  },
  navLink: {
    color: textColor,
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};
