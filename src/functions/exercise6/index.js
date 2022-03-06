const numbers = [11, 9, 13, 12];

function swap(n1, n2, array) {
  temp = array[n1];
  array[n1] = array[n2];
  array[n2] = temp;
}

function minorInRange(n1, n2, array) {
  let temp = array[n1];
  for (let index = n1; index <= n2; index++) {
    if (array[index] < temp) {
      swap(n1, n2, array);
    }
  }
}

for (let index = 1; index < numbers.length; index++) {
  minorInRange(index - 1, index, numbers);
}

console.log(numbers);
