function ejecutarCodigo() {

//Se crea una clase que contenga todas las propiedades que tienen todos los vehículos en común:

class Vehiculo {
  constructor(marca, modelo, precio) {
    this.marca = marca;
    this.modelo = modelo;
    this. precio = precio;
  }
}

//Se crean las clases más específicas, "Auto" y "Moto". Podrían crearse más en caso de ser necesario:

class Auto extends Vehiculo {
  constructor(marca, modelo, puertas, precio) {
    super(marca, modelo, precio);
    this.puertas = puertas;
  }
}

class Moto extends Vehiculo {
  constructor(marca, modelo, cilindrada, precio) {
    super(marca, modelo, precio);
    this.cilindrada = cilindrada
  }
}

//Se crean las instancias solicitadas y se guardan automáticamente en un array:

let vehiculos = [];
vehiculos.push(new Auto("Peugeot", 206, 4, 200000));
vehiculos.push(new Moto("Honda", "Titan", "125c", 60000));
vehiculos.push(new Auto("Peugeot", 208, 5, 250000));
vehiculos.push(new Moto("Yamaha", "YBR", "160c", 80500.5));

//Dar formato de precio a la propiedad "precio":

let pesoArg = { style: 'currency', currency: 'ARS' };
let formatoPrecio = new Intl.NumberFormat('es-AR', pesoArg);

//IMPRESIÓN DE LA LISTA DE VEHÍCULOS. De acuerdo a qué instancia específica se cree, se imprimen las propiedades indicadas para dicha instancia:

vehiculos.forEach(function(item) {
  if (item instanceof Auto === true) {
    console.log("Marca: " + item.marca + " // " + "Modelo: " + item.modelo + " // " + "Puertas: " + item.puertas + " // " + "Precio: " + formatoPrecio.format(item.precio));
  } else {
    console.log("Marca: " + item.marca + " // " + "Modelo: " + item.modelo + " // " + "Cilindrada: " + item.cilindrada + " // " + "Precio: " + formatoPrecio.format(item.precio));
  };
});

console.log("==============================");

// Ordenar vehículos por precio:

vehiculos.sort(function(a, b) {return b.precio - a.precio;});

//IMPRIMIR VEHÍCULO MÁS CARO y MÁS BARATO:

console.log("Vehículo más caro: " + vehiculos[0].marca + " " + vehiculos[0].modelo);
console.log("Vehículo más barato: " + vehiculos[vehiculos.length-1].marca + " " + vehiculos[vehiculos.length-1].modelo);

// buscar vehiculos que contengan Y:

let resultado = "";

vehiculos.forEach(function(match) {
  if (/[y]/i.test(match.marca) === true) {
    resultado = match;
  };
  return resultado;
});

//IMPRIMIR VEHÍCULO QUE CONTENGA EN SU MARCA LA LETRA 'Y':

console.log("Vehículo que contiene en el modelo la letra 'Y': " + resultado.marca + " " + resultado.modelo + " " + formatoPrecio.format(resultado.precio));

console.log("==============================");

/*
//(SOLUCIÓN ALTERNATIVA A ESE PUNTO):

let resultado = "";

for (let i = 0; i < vehiculos.length; i++) {
  let coincidencia = /[y]/i.test(vehiculos[i].marca);
  if (coincidencia === true) {
    resultado = vehiculos[i];
  }
};

console.log("Vehículo que contiene en el modelo la letra 'Y': " + resultado.marca + " " + resultado.modelo + " " + formatoPrecio.format(resultado.precio));

*/

//EJERCICIO EXTRA (ordenar vehículos por precio de mayor a menor):

console.log("Vehículos ordenados por precio de mayor a menor:" + "\n");

vehiculos.forEach(function(item) {
  console.log(item.marca + " " + item.modelo + "\n");
});

//Mensaje que aparece una vez ejecutado el código
alert("El código ha sido ejecutado!");
};

//Mensaje despedida
function msgDespedida() {
  document.getElementById('descr').innerHTML = "Gracias, vuelva prontos...";
  document.getElementById('descr').style.fontSize = "3.5em";
  document.getElementById('descr').style.fontFamily = "Indie Flower"
};
