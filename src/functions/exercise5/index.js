const numbers = [11, 9, 13, 12];

function minorInRange(n1, n2, array) {
  let temp = array[n1];
  for (let index = n1; index <= n2; index++) {
    if (array[index] < temp) {
      temp = array[index];
    }
  }
  return temp;
}

console.log(minorInRange(0, 3, numbers));

console.log(minorInRange(2, 3, numbers));

console.log(minorInRange(1, 3, numbers));
