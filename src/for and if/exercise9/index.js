let numbers = [0,1,2,3,4,5,6,7,8,9]

for ( let left of numbers) {
    if (left > 0){
        console.log("\n" + "Tabla del "+left+"\n");
    }
    for (let right of numbers) {
        if (left > 0){
            if (right > 0){
                console.log(left + " x " +  right + " = " + left * right);
            }
        }
    }
}