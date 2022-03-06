let numbers = [2, 1, 4, 5, 6, 3, 7, 8, 1, 4, 6, 8, 1, 5, 7, 8, 3];
let ordenada = [];

for (let idx = 1; idx < numbers.length; idx++) {
  let temp1 = numbers[idx - 1];
  let temp2 = numbers[idx];

  if (temp1 > temp2) {
    numbers[idx - 1] = temp2;
    numbers[idx] = temp1;
    idx = 1;
  }
}

console.log(numbers);
