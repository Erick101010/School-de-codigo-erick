// // variable booleana
// var salir = true;

// // arreglo = conjunto de datos comparte caracteristicas 
// var numeros = [];
// // ciclo while que permita mostrar prompt indefinido

// while (salir) {
//     var numero = prompt('ingresa un número');
// //  alerta para confirmar una accion y nos devuelve true o false; 
//     var seguir = confirm('desea ingresar mas numeros');
// // evaluaciones o condiciones;  
//     if (seguir == false) {

//         salir = false;

// variable booleana

// arreglo = conjunto de datos comparte caracteristicas 
// var numeros = [];
// // ciclo while que permita mostrar prompt indefinido;
// var salir = true;

// while (salir) {
//     var seguir = confirm('desea ingresar mas numeros');
//     if (seguir == false){
//         salir = false
//         alert("Saliendo");


//     }
// }
var salir = true;

// arreglo conjunto de datos con caracteristicas en comun
var numeros = [];

// ciclo while que permita mostrar prompt indefinido

while(salir){
  
  var numero = prompt('ingresa un número');
  //   empujando o almacenando
  numeros.push(numero);
  
	//  alerta para confirmar una accion y nos devuelve true o false 
  var seguir = confirm('desea ingresar mas numeros');
	// evaluaciones o condiciones    
  if(seguir == false ){
  
    salir = false;
    
    
}
}

console.log(numeros);
