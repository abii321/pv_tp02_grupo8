document.addEventListener('DOMContentLoaded', () => {
    const radios = document.querySelectorAll('input[name="language"]');
    const result = document.getElementById('result');
  
    radios.forEach(radio => {
      radio.addEventListener('change', (event) => {
        const selectedValue = event.target.value;
        result.innerHTML = `Has seleccionado: <strong>${selectedValue}</strong>`;
        console.log(`Lenguaje seleccionado: ${selectedValue}`);
      });
    });
  });