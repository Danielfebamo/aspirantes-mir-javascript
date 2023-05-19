function maxIndex(arreglo){
    if (arreglo.length===0) {
        return -1;
    }
    var maxArreglo = arreglo[0];
    var maxIndex=0;

    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > maxArreglo) {
          maxArreglo = arreglo[i];
          maxIndex = i;
       }
       }
       return maxIndex;
}

console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1