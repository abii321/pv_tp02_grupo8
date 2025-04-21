export const actualizarSeleccion= (valor) => {
    const result = document.getElementById('result');
    result.innerHTML = `Has seleccionado: <strong>${valor}</strong>`;
    console.log(`Lenguaje Seleccionado: ${valor}`);
};