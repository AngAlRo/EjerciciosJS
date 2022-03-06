const phrase = "No hay bien que por mal no venga";
const counters = {};

function countLetter(letter, countersObject) {
  let repeticion = 0;
  if (counters.hasOwnProperty(`letra ${letter}`) == false) {
    for (const fonema of countersObject) {
      if (letter == fonema) {
        repeticion++;
      }
    }
    counters[`letra ${letter}`] = repeticion;
  }
}

for (letter of phrase) {
  countLetter(letter, phrase);
}

console.log(counters);
