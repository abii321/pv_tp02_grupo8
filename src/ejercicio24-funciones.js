export const generarColorAleatorioRGB = () => {
    const r = Math.floor(Math.random() * 256); 
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};

export const cambiarColorFondo = () => {
    const color = generarColorAleatorioRGB();
    document.body.style.backgroundColor = color;
    console.log(`Color de fondo cambiado a: ${color}`);
};