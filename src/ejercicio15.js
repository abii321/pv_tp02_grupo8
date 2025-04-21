
const retornarMes = (numero) => {
    const meses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    return (numero >= 1 && numero <= 12) ? meses[numero - 1] : "No corresponde a un mes del año.";
};

let numeroMes = parseInt(prompt("Ingrese un número del 1 al 12:"));
let resultado = retornarMes(numeroMes);

console.log("Resultado: " + resultado);