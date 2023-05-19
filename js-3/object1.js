var pedro ={
    nombre: "PEDRO PEREZ",
    edad: 30,
    activo: true,
    hobbies:["programar","squash","piano"],
    hola: function saluda(){
        console.log("HOLA ME LLAMO "+this.nombre);

    }
}

console.log(pedro.edad);
pedro.estatura=1.8;
delete pedro.activo;

for (let llave in pedro) {
    if (pedro.hasOwnProperty(llave)) {
      console.log(llave,":",pedro[llave])
    }
  }

  pedro.hola();