function power(parametro1, parametro2) {
  return parametro2 === undefined ? parametro1 ** 1 : parametro1 ** parametro2;
}

console.log(power(25));
console.log(power(8, 1 / 3));
console.log(power(2, 3));
console.log(power(5, 2));
