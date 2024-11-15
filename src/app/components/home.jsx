'use client';

import { primary, tertiary, textColor, textContraste, textHighlight } from '../colors.js';
import { useState } from 'react';
import { db } from "../../firebaseConfig.js";
import { collection, getDocs } from "firebase/firestore";
import Gauge from './gauge.jsx';
import localFont from 'next/font/local';

const FeelingPassionate = localFont({
    src: [
        {
            path: '../../../public/fonts/Feeling-passionate.otf',
            weight: '400',
            style: 'normal',
        },
    ],
    variable: '--font-feeling-passionate',
});

function getMainDomain(url) {
    try {
        // Agrega 'http://' si falta, para que el objeto URL pueda interpretar la URL
        const parsedUrl = new URL(url.startsWith("http") ? url : `http://${url}`);
        // Obtén el nombre del dominio sin subdominios
        const domainParts = parsedUrl.hostname.split('.').filter(part => part !== 'www');
        return domainParts.length > 1 ? domainParts[domainParts.length - 2] : domainParts[0];
    } catch (error) {
        return null; // Retorna null si la URL no es válida
    }
}

function isValidURL(url) {
    try {
        const parsedUrl = new URL(url.startsWith("http") ? url : `http://${url}`);
        return parsedUrl.hostname.includes('.');
    } catch (error) {
        return false;
    }
}

export default function Home() {
    const [inputValue, setInputValue] = useState('');
    const [inputStyle, setInputStyle] = useState(styles.input);
    const [gaugeValue, setGaugeValue] = useState(50); // Valor inicial del medidor
    const [loading, setLoading] = useState(false); // Estado de carga


    const handleSubmit = async () => {
        if (!isValidURL(inputValue)) {
            setInputStyle({ ...styles.input, border: '6px solid red' });
            return;
        } else {
            setLoading(true); // Inicia el estado de carga
            const mainDomain = getMainDomain(inputValue);

            try {
                const confiableCollection = collection(db, "confiable");
                const noConfiableCollection = collection(db, "no-confiable");

                const confiableSnapshot = await getDocs(confiableCollection);
                const confiableURLs = confiableSnapshot.docs.map(doc => doc.data().url);

                const noConfiableSnapshot = await getDocs(noConfiableCollection);
                const noConfiableURLs = noConfiableSnapshot.docs.map(doc => doc.data().url);

                if (confiableURLs.includes(mainDomain)) {
                    setInputStyle({ ...styles.input, border: '6px solid green' });
                    setGaugeValue(100); // URL confiable, valor alto
                    console.log("La URL es confiable");
                } else if (noConfiableURLs.includes(mainDomain)) {
                    setInputStyle({ ...styles.input, border: '6px solid red' });
                    setGaugeValue(0); // URL no confiable, valor bajo
                    console.log("La URL no es confiable");
                } else {
                    setInputStyle(styles.input);
                    setGaugeValue(50); // URL no encontrada, valor neutro
                    console.log("La URL no se encuentra en la base de datos");
                }
            } catch (error) {
                console.error("Error al consultar Firestore: ", error);
            } finally {
                setLoading(false); // Finaliza el estado de carga
            }
        }
    };


    return (
        <div style={styles.safeAreaView} className={FeelingPassionate.variable}>
            <h1 style={styles.titleText}>
                <b style={styles.highlightWord}>F</b>ake
                <b style={styles.highlightWord}>O</b>ut
            </h1>
            <h1 style={styles.projectTitle}>VeriVerify</h1>

            {/* Campo de entrada debajo de los títulos */}
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="link del artículo aquí"
                style={inputStyle}
            />
            <button onClick={handleSubmit} style={styles.button}>Verificar URL</button>
            <Gauge value={gaugeValue} loading={loading} />
        </div>
    );
}

const styles = {
    safeAreaView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 'min(420px, 80%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },

    titleText: {
        fontSize: '2.5rem',
        color: textColor,
        fontWeight: 'bold',
        fontFamily: `var(--font-feeling-passionate), sans-serif`,
    },

    projectTitle: {
        fontSize: '5rem',
        color: textColor,
        fontWeight: 'bold',
        marginBottom: '1rem',
        fontFamily: `var(--font-feeling-passionate), sans-serif`,
    },

    highlightWord: {
        color: textHighlight,
    },

    input: {
        padding: '10px',
        fontSize: '1rem',
        borderRadius: '32px',
        border: '6px solid transparent', /* Borde transparente */
        outline: 'none',
        color: textContraste,
        backgroundColor: 'transparent', /* Fondo transparente para mostrar el gradiente */
        width: '100%',
        maxWidth: '300px',
        marginBlock: '1rem',
        textAlign: 'center',
        backgroundImage: `linear-gradient(${primary}, ${primary}), linear-gradient(127deg, ${primary}, ${tertiary})`,
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
    },
    button: {
        padding: '10px 20px',
        fontSize: '1rem',
        borderRadius: '32px',
        cursor: 'pointer',
        backgroundColor: primary,
        color: '#fff',
        border: 'none',
        outline: 'none',
        marginBlock: '1rem',
    }
};