function join(arreglo){
    if (arreglo.length===0) {
        return "no hay nada";
    }
    var result=" ";

    for (var i=0;i<arreglo.length;i++){
        result=result+arreglo[i];

        if (i!==arreglo.length - 1) {
            result=result+" ";
        }
    }
    return result;
}

console.log(join(["hola", "mundo", "!"]))