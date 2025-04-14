const edades = [18, 22, 20, 25, 30, 27, 24, 19];

console.log("Edades:", edades);
const calcularPromedio = (arr) => {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
    suma += arr[i];
}
return suma / arr.length;
};

const promedio = calcularPromedio(edades);
console.log(`El promedio de las edades es: ${promedio}`);
