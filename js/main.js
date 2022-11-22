// menu hamburguesa
document.querySelector(".menu-hamburguesa").addEventListener("click", animacionNav)
let span1 = document.querySelector(".span-1")
let span2 = document.querySelector(".span-2")
let span3 = document.querySelector(".span-3")

function animacionNav (){
     span1.classList.toggle("js-span-1")
     span2.classList.toggle("js-span-2")
     span3.classList.toggle("js-span-3")
}



// creando un array
 const articulo = [
     {id: 1, nombre: "iPhone 13", precio: 1100,img: `https://http2.mlstatic.com/D_NQ_NP_906646-MLA46153566882_052021-O.jpg`},
     {id: 2, nombre: "Nova y70", precio: 300, img: `https://img01.huaweifile.com/sg/ms/co/pms/uomcdn/CO_HW_B2C/pms/202208/gbom/6941487255788/428_428_56DF59C8A6C99B0D2001BDF4B3FF8548mp.png`},
     {id: 3, nombre: "Nevera Black Edition", precio: 2000, img:`https://images.samsung.com/is/image/samsung/p5/latin/blackedition/new/rf263beaesg/RF263BEAESG-v2.png?$ORIGIN_PNG$`},
     {id: 4, nombre: "Lavadora AWÜA", precio: 950, img:`https://hacebco.vteximg.com.br/arquivos/ids/168395-800-800/01_7704353431421_LAV-AWUA-13-KG-M-NE.jpg?v=637675117948770000`},
     {id: 5, nombre: "Playstation 5", precio: 500, img:`https://exitocol.vtexassets.com/arquivos/ids/9154827/consola-sony-playstation-5-ps5-825gb-lector-de-disco.jpg?v=1755039715`},
     {id: 6, nombre: "XBox Series X", precio: 400, img:`https://exitocol.vtexassets.com/arquivos/ids/7234186/consola-xbox-series-x-1tb-microsoft.jpg?v=637532554326130000`},
     {id: 7, nombre: "Aire Acondicionado Smart LG ArtCool Inverter", precio: 300, img:`https://www.lg.com/mx/images/aire-acondicionado-residencial/md05914316/Gallery/D_01.jpg`},
    {id: 8, nombre: "Ventilador SAMURAI Comfort Maxx 3 en 1", precio: 200, img:`https://groupesebcol.vtexassets.com/arquivos/ids/160014-800-auto?v=637866619469170000&width=800&height=auto&aspect=true`},
     {id: 9, nombre: "AirPods Max", precio: 350, img:`https://falabella.scene7.com/is/image/FalabellaCO/10603922_1?wid=800&hei=800&qlt=70`},
]

// accedo al dom

let contenedorArticulo = document.getElementById(`contenedor-articulos`)
let contenedorArticulos = document.getElementById(`carrito`)

// funcion de orden superior


function productos(){
     articulo.forEach(elemento =>{
          // creo un elemento
          let el = document.createElement(`div`)
          el.className = `contenedor-imagenes-articulos`
          el.innerHTML = `<div class="contenedor-articulos">
                              <p class="nombre-articulo">${elemento.nombre}</p>
                              <img src=${elemento.img} alt="" class="articulos">
                              <p class="nombre-articulo">$${elemento.precio} USD</p>
                              <button class="boton-articulo" id="boton ${elemento.id}">agregar al carrito</button>
                         </div>`
          contenedorArticulo.appendChild(el)
          
          // Toastify
          let botonComprar = document.getElementById(`boton ${elemento.id}`)
          botonComprar.onclick = ()=>{
               funcionCarrito(elemento.id)
               Toastify({
               text: `Agregaste ${elemento.nombre} al carrito`,
               position: 'left',
               backgroundColor: "blue",
               }).showToast()
          } 
     })
}

productos()

const carrito = JSON.parse(localStorage.getItem("seleccionDeArticulo")) ||[]

function funcionCarrito(id){
    
     let seleccionDeArticulo = articulo.find(producto => producto.id == id)
     carrito.push(seleccionDeArticulo)
     console.log(carrito)
     mostrar()
}
const mostrar = () =>{
     contenedorArticulos.innerHTML = ""
     
     carrito.forEach((prod) => {
          const div = document.createElement(`div`)
          div.className = (`carrito`)
          div.innerHTML = `<p>${prod.nombre}</p>
          <p>$ ${prod.precio}</p>
          <button id="eliminar" onclick=eliminarDelCarrito(${prod.id})> eliminar </button>`
          contenedorArticulos.appendChild(div)
          localStorage.setItem("productos", JSON.stringify(carrito))
     })
}
const eliminarDelCarrito = (id) =>{
     const item = carrito.find((prod) => prod.id == id)
     const indice = carrito.indexOf(item)
     carrito.splice(indice,1)
     mostrar()
}

