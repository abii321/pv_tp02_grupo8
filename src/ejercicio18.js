
const parrafo = document.getElementById('miParrafo');
const boton = document.getElementById('miBoton');

boton.addEventListener('click', () => {
  parrafo.textContent = '¡El Texto ha cambiado!';
});