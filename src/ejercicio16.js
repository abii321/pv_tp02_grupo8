const sumarRango = (inicio, fin) => {
    if (inicio > fin) {
    return "Error: el número inicial debe ser menor o igual que el final.";
    }
    let suma = 0;
    for (let i = inicio; i <= fin; i++) {
        suma += i;
    }
    return suma;
};

const numeroInicial = parseInt(prompt("Ingrese el número inicial del rango:"));
const numeroFinal = parseInt(prompt("Ingrese el número final del rango:"));

const resultado = sumarRango(numeroInicial, numeroFinal);
console.log(`La suma del rango es: ${resultado}`);