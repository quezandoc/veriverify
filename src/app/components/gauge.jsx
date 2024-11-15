import React, { useEffect, useState } from 'react';

export default function Gauge({ value, loading }) {
  const [displayValue, setDisplayValue] = useState(value);
  const [trueSelected, setTrueSelected] = useState(false);
  const [falseSelected, setFalseSelected] = useState(false);

  useEffect(() => {
    let interval;
    if (loading) {
      // Oscilar la aguja entre 40 y 60 mientras carga
      interval = setInterval(() => {
        setDisplayValue((prev) => (prev === 40 ? 60 : 40));
      }, 300);
    } else {
      // Fijar la aguja en el valor final cuando deja de cargar
      const trueLabel = document.getElementById("trueLabel");
      const falseLabel = document.getElementById("falseLabel");
      if (value > 90) {
        setTrueSelected(true)
      } else if (value < 10) {
        setFalseSelected(true)
      } else {
        setTrueSelected(false)
        setFalseSelected(false)
      }
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
      </div>
      <div style={styles.labels}>
          <span id="falseLabel" style={falseSelected ? styles.labelSelected : styles.label}>FALSO</span>
          <span id="trueLabel" style={trueSelected ? styles.labelSelected : styles.label}>VERDAD</span>
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
  },
  label: {
    color: 'grey',
    fontWeight: 'bold',
    transition: '0.3s',
    fontSize: '16px', 
  },
  labelSelected: {
    color: 'black',
    fontWeight: 'bold',
    transition: '0.3s',
    fontSize: '18px',
  }
};
