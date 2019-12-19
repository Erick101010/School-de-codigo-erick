
 var N1 = prompt('ingresa un número');
 var N2 = prompt("Ingresa otro número");
 var pro = prompt("Selecciona la operación que quieras hacer: suma, resta, multiplicación, división");
 
 var operacion = parseInt(N1) + (N2);
 console.log(numeros);
 function Suma() {
   var n1 = document.getElementById('txtN1').value;
   var n2 = document.getElementById('txtN2').value;
  
  var suma = parseInt(n1) + parseInt(n2);
 
  alert("La Suma  de  " + n1 + "  + " + n2 + " es : " + suma);
}


function Resta() {
 
  var n1 = document.getElementById('txtN1').value;
  var n2 = document.getElementById('txtN2').value;
  var resta = parseInt(n1) - parseInt(n2);
 
  alert("La Resta de  " + n1 + "  - " + n2 + " es : " + resta);
}
function Multi() {
  var n1 = document.getElementById('txtN1').value;
  var n2 = document.getElementById('txtN2').value;
  var multiplicacion = parseInt(n1) * parseInt(n2);

  alert("La multiplicación de  " + n1 + "  X " + n2 + " es : " + multiplicacion);
}


function Divi() {
  var n1 = document.getElementById('txtN1').value;
  var n2 = document.getElementById('txtN2').value;
  var division = parseInt(n1) / parseInt(n2);
  alert("La multiplicación de  " + n1 + "  / " + n2 + " es : " + division);
}
  numeros.push(numero);
  
  var seguir = confirm('desea ingresar mas numeros');
    
  if(seguir == false ){
  
    salir = false;
    
    
}


