//Escribir una función llamada mostrarArreglo que reciba un arreglo numérico como 
// parámetro e imprima cada elemento en una línea a parte.
function mostrarArreglo(arreglo) {
    for (let i = 0; i < arreglo.length; i++) {
        console.log(arreglo[i]);
    }
}
const numeros = [1, 2, 3, 4, 5];
mostrarArreglo(numeros);