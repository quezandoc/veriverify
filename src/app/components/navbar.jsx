// components/Navbar.js
import Link from 'next/link';
import React from 'react';
import { primary, secondary, textColor } from '../colors';

export default function Navbar({ items, activeItemId, onItemClick }) {

  
  return (
    <div style={styles.navbar}>
        <div style={styles.navItem}>
            {items.map((item) => (
                <button
                    key={item.id}
                    style={item.id === activeItemId ? styles.navItemActive : styles.navItem}
                    onClick={() => onItemClick(item.id)}
                >
                    {item.name}
                </button>
            ))}
        </div>
    </div>
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
    zIndex: 1000,
  },
  navItem: {
    backgroundColor: secondary, // Fondo en estado normal
    color: 'white', // Texto en color blanco
    fontWeight: 'normal', // Peso de fuente normal
    border: 'none', // Sin bordes
    borderRadius: '5px', // Bordes redondeados
    padding: '10px 20px', // Espaciado interno
    marginInline: 10,
    transition: 'background-color 0.3s ease', // Transición suave para el color de fondo
    cursor: 'pointer', // Cambia el cursor al pasar sobre el botón
  },
  navItemActive: {
    backgroundColor: primary, // Fondo en estado activo
    color: 'white', // Texto en color blanco
    fontWeight: 'bold', // Fuente destacada
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    marginInline: 10,
    transition: 'background-color 0.3s ease', // Transición suave para el color de fondo
    cursor: 'pointer',
  },
};
