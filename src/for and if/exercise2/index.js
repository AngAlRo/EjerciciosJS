const numbers = [0,1,2,4,5,9,3,6,7,8];

let contador = 0;
for (let item of numbers) {
    console.log("En la posicion: " + contador + " esta el valor: "+ numbers[contador]);
    contador= contador+1;
}
console.log('');
console.log("Cantidad de elementos del Array: "+ contador);