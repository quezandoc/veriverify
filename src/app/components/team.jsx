import React from 'react';
import { secondary, textColor } from '../colors';

export default function Team() {
    return (
        <div style={styles.containerStyle}>
            <div style={styles.rectangleStyle}>
                <p style={styles.textStyle}>
                    Somos un talentoso equipo de estudiantes de tercero medio del Colegio Juan Terries, apasionados por la tecnología y el desarrollo de aplicaciones innovadoras. Nos enorgullece presentarles nuestro último proyecto, diseñado con dedicación y creatividad.
                </p>
                <div style={styles.imageContainerStyle}>
                    <img
                        src="images/imagen1.jpg"
                        alt="Imagen 1"
                        style={styles.imageStyle}
                    />
                    <img
                        src="images/imagen2.jpg"
                        alt="Imagen 2"
                        style={styles.imageStyle}
                    />
                    <img
                        src="images/imagen3.jpg"
                        alt="Imagen 3"
                        style={styles.imageStyle}
                    />
                </div>
            </div>
        </div>
    );
}

const styles = {
    containerStyle: {
        padding: '20px',
        backgroundColor: secondary,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
    },
    rectangleStyle: {
        padding: '20px',
        borderRadius: '8px',
        maxWidth: '800px',
        textAlign: 'center',
    },
    textStyle: {
        fontSize: '18px',
        color: textColor,
        marginBottom: '20px',
        fontWeight: 'bold'
    },
    imageContainerStyle: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '10px',
        placeItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: '300px',
        overflowY: 'auto',
    },
    imageStyle: {
        borderRadius: '16px',
        width: '160px',
        height: '300px',
        objectFit: 'cover',
    },
};
