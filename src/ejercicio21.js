import { mostrarTexto } from "./ejercicio21-funciones.js";

let inputTexto = document.getElementById('entradaTexto');
let textoMostrado = document.getElementById('textoMostrado');
inputTexto.addEventListener('input', function(){
    mostrarTexto(inputTexto, textoMostrado);
});
