function enviarContacto(email, nombre) {
  let emailInput = document.getElementById("emailId");
  let nombreInput = document.getElementById("nombreId");
  const mensaje=document.getElementById("mensaje");
  if (email.length > 0 && nombre.length > 0) {
    mensaje.innerText= "mensaje enviado correctamente";
    emailInput.value = "";
    nombreInput.value = "";
  } else {
    mensaje.innerText= "email y/o nombre incompleto";
  }
}

function agregarAlPedido() {
  const mensaje=document.getElementById("mensaje");
let test = document.getElementById("jorgito"); 
mensaje.innerText= "se agrego tu pedido ya " + test.value;




}

function calcularPrecio() {
  let selectKilos = document.getElementById("selectKilos").value;
  let selectMoneda = document.getElementById("selectMoneda").value;
  let mensaje = document.getElementById("mensaje");

  if (selectMoneda == "peso") {
    mensaje.innerText = "el valor seria un aproximado de " + selectKilos * 700;
  } else {
    mensaje.innerText =
      "el valor seria un aproximado de " + (selectKilos * 700) / 42;
  }
}
function initPrecio() {
  let divSimulador = document.getElementById("divSimuladorPrecio");
  let selectKilos = document.getElementById("selectKilos");
  let selectMoneda = document.getElementById("selectMoneda");
  let i = 1;
  let kilosOptions = "";
  let monedaOptions = "";
  do {
    kilosOptions += "<option value='" + i + "'>" + i + "</option>";
    i++;
  } while (i <= 5);
  selectKilos.innerHTML = kilosOptions;
  i = 1;
  do {
    if (i == 1) {
      monedaOptions += "<option value='dolar'>dolar</option>";
    } else {
      monedaOptions += "<option value='peso'>pesos</option>";
    }
    i++;
  } while (i <= 2);
  selectMoneda.innerHTML = monedaOptions;
  divSimulador.style.visibility = "visible";
}


