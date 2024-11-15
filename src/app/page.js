'use client'

import { primary, tertiary, textColor, textContraste, textHighlight } from './colors.js';
import { useState } from 'react';
import Navbar from './components/navbar.jsx';
import Home from './components/home.jsx'
import Team from './components/team.jsx';

export default function Page() {
  const [items, setItems] = useState([
    { id: 0, name: 'Inicio' },
    { id: 1, name: 'Equipo' },
  ]);
  const [activeItemId, setActiveItemId] = useState(0);


  // Renderiza el componente según el `activeItemId`
  const renderContent = () => {
    switch (activeItemId) {
      case 0:
        return <Home />;
      case 1:
        return <Team />;
      default:
        return <div style={styles.pageContent}>Selecciona una opción</div>;
    }
  };

  return (
    <div style={styles.mosaicBackground}>
      <Navbar
        items={items}
        activeItemId={activeItemId}
        onItemClick={setActiveItemId}
      />
      <div style={styles.contentContainer}>
        {renderContent()}
      </div>
    </div>
  );
}

const styles = {
  mosaicBackground: {
    backgroundColor: tertiary, /* Color de fondo */
    backgroundImage: 'url("images/mosaic.svg")', /* Ruta del archivo SVG */
    backgroundRepeat: 'repeat', /* Repite el SVG en un patrón de mosaico */
    backgroundSize: '100px 50px', /* Ajusta el tamaño de cada "mosaico" */
    width: '100svw',
    height: '100svh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  contentContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '80px', // Ajusta esto al alto del navbar
    minHeight: 'calc(100vh - 80px)', // Asegura que el contenido llene la pantalla debajo del navbar
  },
};
