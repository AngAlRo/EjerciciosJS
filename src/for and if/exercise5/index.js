const numbers = [0,1,5,2,7,5,0,0,9,5,5,6];
let counter = 0;
let puesto = 0;
let posicion = [];

for (let item of numbers){
    puesto ++
    if (item === 5){
        posicion.push(puesto);
        console.log ("el numero 5 aparece en la posición: " + puesto);
        counter ++;
    }
}
// Put your code here
console.log(posicion);
console.log("la cantidad de veces que aparece el numero 5 es: " + counter);