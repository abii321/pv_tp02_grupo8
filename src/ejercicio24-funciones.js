export const generarColorAleatorioRGB = () => {
    let r = Math.floor(Math.random() * 256); 
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};

export const cambiarColorFondo = () => {
    let color = generarColorAleatorioRGB();
    document.body.style.backgroundColor = color;
    console.log(`Color de fondo cambiado a: ${color}`);
};