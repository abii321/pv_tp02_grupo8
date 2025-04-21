export const CambiarTexto= () => {
const parrafo = document.getElementById('miParrafo');
parrafo.textContent='¡El Texto ha cambiado!';
}; 
const boton = document.getElementById('miBoton');

boton.addEventListener('click', CambiarTexto);
