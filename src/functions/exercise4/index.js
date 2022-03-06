const numbers = [11, 12, 13, 14];

function swap(n1, n2, array) {
  temp = array[n1];
  array[n1] = array[n2];
  array[n2] = temp;
}

swap(0, 3, numbers);
console.log(numbers);

swap(1, 2, numbers);
console.log(numbers);
