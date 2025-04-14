const kilometros = parseFloat(prompt("Ingrese los kilómetros recorridos:"));
const litros = parseFloat(prompt("Ingrese los litros de combustible consumidos:"));

if (kilometros > 0) {
    const consumo = litros / kilometros;
    console.log(`El consumo de combustible por kilómetro es: ${consumo.toFixed(2)} L/km`);
    } else {
    console.log("El número de kilómetros debe ser mayor a 0.");}