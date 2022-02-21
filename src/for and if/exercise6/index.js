const mix = [undefined,22,"1",4,3,"5",7,NaN,8,"9","12",11,null];
let strings = [];
let numbers = [];
for (let item of mix) {

    if (typeof(item)=== 'number' && (+(item))){
        numbers.push(item);
    }else{
        strings.push(item);
    }
}

console.log("Strings:",strings,"Numbers:",numbers)