// b) Recorridos del Arreglo
// Con el arreglo resultante de la actividad anterior:
// a. Recorra el arreglo utilizando for mostrando posición y valor.
// b. Luego, recórrelo utilizando for...of, mostrando únicamente los valores.
// c. En pareja, discutan y escriban una conclusión breve:
// i. ¿Cuándo es más útil for?
// ii. ¿Cuándo es más útil for...of?

// Se trae el arreglo con 4 verduras
let verduras = ["Zanahoria", "Cebolla", "Tomate", "Brócoli"];

// Se recorre el arreglo utilizando for mostrando posición y valor
for (let i = 0; i < verduras.length; i++) {
    console.log(`\nEn la posicion ${i} se encuentra el valor de: ${verduras[i]}`)
    
}
// Se recorre el arreglo utilizando for...of, mostrando únicamente los valores
console.log("\nLos valores son: ");
for (const i of verduras) {
    console.log(i);
}

// i. ¿Cuándo es más útil for?
// El ciclo for es más útil cuando necesitamos acceder a la posición de los elementos del 
// arreglo, ya que nos permite utilizar un índice para obtener tanto la posición como el 
// valor de cada elemento. Es especialmente útil cuando necesitamos modificar el arreglo o 
// realizar operaciones basadas en la posición de los elementos.

// ii. ¿Cuándo es más útil for...of?
// El ciclo for...of es más útil cuando solo necesitamos acceder a los valores de los elementos 
// del arreglo sin preocuparnos por sus posiciones. Es más sencillo y legible cuando solo 
// queremos iterar sobre los valores, ya que no requiere el uso de un índice. Es ideal para 
// casos donde no necesitamos modificar el arreglo o realizar operaciones basadas en la posición 
// de los elementos.