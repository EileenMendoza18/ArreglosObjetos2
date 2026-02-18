// b) Recorrer un Arreglo
// let numeros = [2, 4, 6, 8, 10];
// • Recorra el arreglo utilizando for y escriba los valores.
// • Recorra el mismo arreglo utilizando for...of y escriba los valores.
// • Explique en una frase la diferencia observada entre los dos recorridos.


// Se crea un arreglo con los números del 2 al 10.
let numero = [2,4,6,8,10];
// Se muestra un mensaje para indicar el inicio del primer recorrido.
console.log("\nFor con indice")
// Se utiliza un contador (i) que aumenta en cada vuelta para acceder a la posición.
for (let i = 0; i < numero.length; i++) {
    // Se obtiene el valor del arreglo usando el índice actual dentro de los corchetes.
    console.log(numero[i]);
}

// Se muestra un mensaje para indicar el inicio del segundo recorrido.
console.log("\nFor...of con valores")    
// Se recorre el arreglo de una forma más moderna y directa.
for (const i of numero) {
    // Se asigna automáticamente el valor de cada elemento a la variable en cada iteración.
    console.log(i);
}
// La diferencia entre ambos recorridos es que el primero utiliza un indice para acceder 
// a los valores del arreglo, mientras que el segundo recorre directamente los valores del 
// arreglo sin necesidad de un indice.