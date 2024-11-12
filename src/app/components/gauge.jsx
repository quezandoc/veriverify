import React, { useEffect, useState } from 'react';

export default function Gauge({ value, loading }) {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    let interval;
    if (loading) {
      // Oscilar la aguja entre 40 y 60 mientras carga
      interval = setInterval(() => {
        setDisplayValue((prev) => (prev === 40 ? 60 : 40));
      }, 300);
    } else {
      // Fijar la aguja en el valor final cuando deja de cargar
      setDisplayValue(value);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [loading, value]);

  const calculateRotation = (displayValue) => {
    // Calcula la rotación de la aguja (de -90 a 90 grados)
    return (displayValue - 50) * 1.8;
  };

  return (
    <div style={styles.gaugeContainer}>
      <div style={styles.gauge}>
        <div style={{ ...styles.needle, transform: `rotate(${calculateRotation(displayValue)}deg)` }} />
        <div style={styles.labels}>
          <span style={styles.falseLabel}>FALSO</span>
          <span style={styles.trueLabel}>VERDAD</span>
        </div>
      </div>
    </div>
  );
}

const styles = {
  gaugeContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gauge: {
    position: 'relative',
    width: '200px',
    height: '100px',
    borderTopLeftRadius: '200px',
    borderTopRightRadius: '200px',
    overflow: 'hidden',
    backgroundImage: 'linear-gradient(90deg, red, orange, green)',
    borderBottom: '6px solid transparent',
  },
  needle: {
    position: 'absolute',
    bottom: '0',
    left: '50%',
    width: '2px',
    height: '100px',
    backgroundColor: 'black',
    transformOrigin: 'bottom center',
    transition: 'transform 0.3s ease-out',
  },
  labels: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    top: '110px',
  },
  falseLabel: {
    color: 'black',
    fontWeight: 'bold',
  },
  trueLabel: {
    color: 'black',
    fontWeight: 'bold',
  },
};
