// d) Arreglo de Objetos (Integración)
// a. Construyan un arreglo llamado inventario que contenga al menos 3 objetos,
// cada uno representando un elemento diferente (por ejemplo, cuadernos,
// teclados, audífonos, etc.).
// b. Cada objeto debe tener mínimo 3 propiedades.
// c. Recorra el arreglo usando for...of e imprima una propiedad específica de cada
// objeto, por ejemplo, su nombre o su uso principal.

// Se define un arreglo llamado inventario que contiene tres objetos
let inventario=[
    // Cada objeto representa un elemento diferente con al menos tres propiedades: nombre, uso y marca.
    {
        nombre: "Audífonos Sony",
        uso: "Audio personal",
        marca: "Sony"
    },
    {
        nombre: "Cuadernos A4",
        uso: "Escritura",
        marca: "Faber-Castell"
    },
    {
        nombre: "Termo de Agua",
        uso: "Mantener temperatura del agua",
        marca: "Stanley"
    }
]
// Se utiliza un ciclo for...of para recorrer cada objeto dentro del arreglo inventario
for (const objeto of inventario) {
    // Se imprime la propiedad 'uso' de cada objeto en la consola
    console.log(`Uso: ${objeto.uso}`);
}