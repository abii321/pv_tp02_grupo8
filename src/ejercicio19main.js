import { mostrarDatos } from './ejercicio19-funciones.js';

const inputNombre = document.querySelector("#nombre");
const inputApellido = document.querySelector("#apellido");
const inputLibreta = document.querySelector("#libreta");
const boton = document.querySelector("#enviar");

const manejarClick = () => {
    const nombre = inputNombre.value;
    const apellido = inputApellido.value;
    const libreta = inputLibreta.value;

    mostrarDatos(nombre, apellido, libreta);
};

boton.addEventListener("click", manejarClick);