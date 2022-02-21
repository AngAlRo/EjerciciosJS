let numbers = [2,1,4,5,6,3,7,8,1,4,6,8,1,5,7,8,3]
let ordenada = [];

for (let item of numbers){
    if (ordenada.length == 0) {
        
        ordenada.push(item);
    }else{
        for (let buscado = 0 ; buscado < ordenada.length ; buscado ++){
            /*if (item > ordenada[buscado]){
                ordenada.push(item);
                buscado = ordenada.length;
                console.log("item es mayor "+ ordenada)
            }else{
                ordenada.splice(buscado,0,item);
                buscado = ordenada.length;
                console.log("item es menor "+ ordenada)
            }*/
console.log("en ordenada buscado hay: "+ ordenada[buscado])
            if (item <= ordenada[buscado]){
                ordenada.splice(buscado,0,item);
                buscado = ordenada.length;
                console.log(item);
                console.log("item es menor "+ ordenada)
            }else{
                ordenada.push(item);
                buscado =ordenada.length;
            }
            
        }
    }
}
console.log(ordenada);