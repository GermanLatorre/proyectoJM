const productos= [];
const contenedor = document.getElementById("contenedor")

const renderizarCartas =  (listaDeProductos) => {
    contenedor.innerHTML =""
    if(listaDeProductos.length >= 1){

        listaDeProductos.forEach((producto)=> {
        contenedor.innerHTML += `
        <div class="carta">
        <h2>${producto.titulo}</h2>
        <p>${producto.categoria}</p>
        <p>precio:$${producto.precio}</p>
        <img src="${producto.urlImage}>
        </div>
        
        `
        })
    }
    else {
        contenedor.innerHTML = "<div class='spinner'></div>"

    }  

}
renderizarCartas(productos)
fetch ("../dataBase.json")
    .then ((respuesta)=>respuesta.json())
    .then ((data)=>{
      data.forEach((elemento)=>productos.push(elemento)) 
      setTimeout(()=>{
          renderizarCartas(productos) 

      }, 2000)
    }
    
    )

console.log(productos)



const formulario= document.getElementById("promociones")
formulario.addEventListener("change",()=> {
    console.log(formulario.categorias.value)

    renderizarCartas(productos.filter((producto)=>
    producto.categoria == formulario.categorias.value))
})
