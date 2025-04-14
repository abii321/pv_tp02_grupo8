//Declarar un array denominado nombres con al menos 6 nombres. Obtener el nombre más largo del array nombres. 

let nombres = ["tony","tom","carolina","tito","rocio","ana"]

let max = nombres[0].length;
let nom = nombres[0]; 

for(let i = 1; i < nombres.length; i++){
    if(nombres[i].length>max){
        max = nombres[i].length;
        nom = nombres[i];
    }
}
console.log("El nombre mas largo es: "+nom);
console.log("Su longitud es: "+max+" caracteres");
