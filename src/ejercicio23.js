import { actualizarSeleccion } from './ejercicio23-funciones.js';
document.addEventListener('DOMContentLoaded', () => {
    const radios = document.querySelectorAll('input[name="language"]');
    radios.forEach(radio => {
      radio.addEventListener('change', (event) => {
        const seleccionado= event.target.value;
        actualizarSeleccion(seleccionado);
      });
    });
  });