export const actualizarSeleccion= (valor) => {
    const result = document.getElementById('result');
    result.innerHTML = `Has seleccionado: <strong>${valor}</strong>`;
    console.log(`Lenguaje Seleccionado: ${valor}`);
};
document.addEventListener('DOMContentLoaded', () => {
    const radios = document.querySelectorAll('input[name="language"]');
    radios.forEach(radio => {
      radio.addEventListener('change', (event) => {
        const seleccionado= event.target.value;
        actualizarSeleccion(seleccionado);
      });
    });
  });