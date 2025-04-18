import { actualizarTexto } from './ejercicio22funciones.js';

const input = document.getElementById("entrada");
const salida = document.getElementById("salida");

input.addEventListener("input", () => {
  const texto = input.value;
  actualizarTexto(texto, salida);
});
