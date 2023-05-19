function sum(arreglo){
     
    var result=0;
    for(var i=0;i < arreglo.length;i++){
       result=result+arreglo[i];
         
    }
    return result;
}

console.log(sum([1, 2, 3]))//6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0