
import{agregarAlCarrito} from "./funciones.carrito.js"
import { obtenerCarrito } from "./storage.js";
import { actualizarContador, mostrarMensaje } from "./ui.js";

document.addEventListener("DOMContenloaded" ,()) =>
     const.contenedor = document.getElementById("contenedor-tarjetas");
    const.carrito = obtenerCarrito();
    actualizarContador(carrito);

    fetch("./data/productos.json").then(res => {
        if(!res.ok){
            throw new Error(Error HTTP status : ${res.status})
        }
        return res.json (

        )
    })
    ,then(data => ) {
        data.forEach(producto=> [
             const tarjeta = document.createElement("article")
             tarjeta.classList.add ("card")

             const log = document.createElement("img")
             Img.alt = producto.nombre 
             img.src = ./${producto.img}

             const titulo = Document.createElement("h3")
             titulo.TextConten = producto.nombre

             const precio = document.createElement("p")
             precio.textContent = ´$$´{producto.precio}
             
             const boton = document.createElement("button")
             boton.classList.add("btn")
             boton.TextConten = "Agregar al carrito"

             boton.addEventListener("click", () => {
             agregarAlCarrito(producto)
             })

             tarjeta.appendChild(img)
             tarjeta.appendChild(titulo)
             tarjeta.appendChild(precio)
             tarjeta.appendChild(boton)

             contenedor.appendChild(tarjeta)
        ])})

    .catch(err) => console.log(Err);

    {);

