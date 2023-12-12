
const formulario = document.querySelector('regis_empre');regis

var p1 = document.getElementById("password1").value;
var p2 = document.getElementById("password2").value;

//que no haya espacios en blanco //
var espacios = false;
var cont = 0;

while (!espacios && (cont < p1.length)) {
  if (p1.charAt(cont) == " ")
    espacios = true;
  cont++;
}
   
if (espacios) {
  alert ("La contraseña no puede contener espacios en blanco");
  return false;
}

// Que no hayan dejado espacio vacio //
if (p1.length == 0 || p2.length == 0) {
    alert("Los campos de la password no pueden quedar vacios");
    return false;
  }

// que ambas contraseñas coincidan //
if (p1 != p2) {
    alert("Las passwords deben de coincidir");
    return false;
  } else {
    alert("Todo esta correcto");
    return true; 
  }