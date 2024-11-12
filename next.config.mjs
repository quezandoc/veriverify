/** @type {import('next').NextConfig} */
const nextConfig = {
    // ... otras configuraciones
    output: 'standalone', // Esto es importante para Firebase Hosting
    distDir: 'out', // Define la carpeta de salida como 'out'
    output: 'export', // Define la carpeta de salida como 'export'
  };
  
  export default nextConfig;
  