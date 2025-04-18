export const actualizarTexto = (texto, elemento) => {
  elemento.textContent = texto;

  if (texto.length > 20) {
    elemento.classList.add("largo");
  } else {
    elemento.classList.remove("largo");
  }
};
