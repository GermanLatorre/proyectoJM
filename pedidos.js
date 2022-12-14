window.localStorage.setItem("pedidos", JSON.stringify([]));


function realizarPedido() {
    const nombre= document.getElementById("nombreUsuario").value;
    const apellido= document.getElementById("apellidoUsuario").value;
    const telefono= document.getElementById("telefonoUsuario").value;
    const direccion= document.getElementById("direccionUsuario").value;
    const torta=document.getElementById("selectTortas").value;
 
    const mensaje=document.getElementById("mensaje");
    let pedido={
        "nombre":"",
        "apellido":"",
        "telefono":0,
        "direccion":"",
        "torta":"",

    }
    if(validarDatos(nombre,apellido,telefono,direccion,torta)){
        mensaje.innerText= "Su pedido ha sido realizado con exito";
        pedido.nombre=nombre;
        pedido.apellido=apellido;
        pedido.telefono=telefono;
        pedido.direccion=direccion;
        pedido.torta=torta;
        
        cargarPedidos(pedido);
    }
    else{
        mensaje.innerText= "datos incorrectos";

    }

}
function validarDatos(nombre,apellido,telefono,direccion,tortas){
    const telefonoNumero=isNaN(telefono);

    if (nombre.length >0 && apellido.length >0 && direccion.length >0 && !telefonoNumero && telefono >0 && tortas !="" ) {
        return true; 
    }
    return false;
}
function cargarTortas(){
    const listaDeTortasDulces= ['chocolate','frutillas','lemon pie','chaja'];
    const listaDeTortasSaladas= ['zapallito','fiambre','cebolla','pascualina'];
    const listaDeTortas= listaDeTortasDulces.concat(listaDeTortasSaladas);
    const divSelector= document.getElementById("tortas");
    let selectorDeTortas= "Tortas: <select id='selectTortas'>";
    for(let i=0; i<listaDeTortas.length; i++){
        if (i==0){
            selectorDeTortas+="<option value=''>" + 'elija una opcion' + "</option>";     
        }
        selectorDeTortas+="<option value='" + listaDeTortas[i] + "'>" + listaDeTortas[i] + "</option>";
    }
    selectorDeTortas+= "</select>";

    divSelector.innerHTML=selectorDeTortas;

}
document.addEventListener("DOMContentLoaded",cargarTortas,false);

function cargarPedidos(pedido){
    let arrayPedidos = JSON.parse(window.localStorage.getItem("pedidos"));
 arrayPedidos.push(pedido);
 window.localStorage.setItem("pedidos",JSON.stringify(arrayPedidos));
 const divListaDePedidos= document.getElementById("listadoDePedidos");
 let parrafoPedidos="";
 for(let i=0; i<arrayPedidos.length; i++){
    parrafoPedidos+="<p>"+ JSON.stringify(arrayPedidos[i] ) +"</p>";
 }
 divListaDePedidos.innerHTML=parrafoPedidos;
}




