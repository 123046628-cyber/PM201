/** Js del lado del servidor */

console.log("Hola mundo JS con Node");

/* Calculo */
let edad1 = 12
let edad2 = 34

console.log("Edad promedio: ")
console.log((edad1 + edad2) / 2)

/* Medir el tiempo del proceso */
console.time("miProceso") //iniciar proceso

//proceso a medir
for (let i = 0; i < 10000000; i++) { }

console.timeEnd("miProceso") //finalizar proceso

/* Objetos tipo tabla */
let usuarios = [
    {nombre: "Zoe", edad: 20},
    {nombre: "Danna", edad: 20},
];

console.table(usuarios)