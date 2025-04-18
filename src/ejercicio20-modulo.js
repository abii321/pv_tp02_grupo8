export const seleccionar = (p, c) => {
    p.addEventListener("change", () => {
        let valorPais= p.value;

        for (let option of c.options) {
            if (option.value === valorPais) {
                option.selected = true;
                break;
            }
        }
    
        let pais= p.options[p.selectedIndex].text;
        let capital= c.options[c.selectedIndex].text;
        console.log("País seleccionado: " + pais + ", Capital: " + capital);
    });
}




