let edades = [18, 22, 20, 25, 30, 27, 24, 19];

console.log("Edades:", edades);

let calcularPromedio = (arr) => {
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    suma += arr[i];
  }
  return suma / arr.length;
};

let promedio = calcularPromedio(edades);
console.log(`El promedio de las edades es: ${promedio}`);
