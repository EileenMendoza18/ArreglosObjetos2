// importacion de  la libreria prompt-sync para la toma de datos por terminal
import promptSync from "prompt-sync";

// inisialisacion de la libreria prompt-sync 
const prompt=promptSync({sigint:true});

// creacion del objeto libro con sus claves
let libro={titulo:"",autor:"",año:"",genero:""}

// bucle que recorre el objeto imprime sus llaves y les asigna un valor 
for (let a in libro){
    libro[a]=prompt("ingrese "+a+" del libro :");
}

// salto de linea para separar los ingresos de la salida en la terminal 
console.log("\n\n\nLibro");

// bucle para recorrer el objeto para inprimir sus claves junto a sus valores
for (let i in libro){
    console.log(i+": "+libro[i]);
}