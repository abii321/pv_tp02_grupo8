/*Solicitar al usuario que ingrese un número. Comparar si es par o no, usando un  if/else determinar si es par que muestre un alert indicando 
que el número es par o sino mostrar un alert indicando que es impar.*/

let num=prompt("Ingrese un numero: ");

num=Number(num);

if( num === 0 ){
    alert("El numero 0 no es par, ni impar")
}
else if ( num % 2 === 0){
    alert("El numero es par");
}
else{
    alert("El numero es impar");
}