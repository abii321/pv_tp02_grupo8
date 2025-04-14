//Escribir una función llamada duplicar que reciba un arreglo de números y retorne un
// nuevo arreglo donde cada número esté multiplicado por dos (2).
function duplicar(arreglo) {
    return arreglo.map(function(numero) {
        return numero * 2;
    });
}
console.log(duplicar([1, 2, 3, 4, 5, 6]));