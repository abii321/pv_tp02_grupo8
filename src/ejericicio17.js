/*Escribir una función llamada contarLetraA que reciba un string y retorne el número de 
veces que aparece la letra "a". */
let s=prompt("Escriba una palabra: ");

const contarLetraA = (s) => {
    let cant=0;
    for(let i=0; i<s.length; i++){
        if(s[i] === 'a'){
            cant++;
        }            
    }
    return cant; 
};

console.log("El numero de veces que aparece la letra a es: "+contarLetraA(s));

