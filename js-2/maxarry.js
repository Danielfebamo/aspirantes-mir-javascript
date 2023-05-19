function max(arreglo){

    if (arreglo.length === 0){
        return undefined;
    }
    var maxArreglo = arreglo[0];
    for(var i=1;i<arreglo.length;i++){
        if (arreglo[i]>maxArreglo) {
            maxArreglo=arreglo[i];
        }
    }
    return maxArreglo;
}

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined