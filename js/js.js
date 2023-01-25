/* let productos=[ 
    
    {
            "id": 1,
            "title": "Buzo",
            "price": 7500,
            "image": "../multimedia/buzo.jpg" ,
            "category": {
                "nombre": "oferta",
                "id": "oferta"
            }
        },
        {
            "id": 2,
            "title": "Jean Style",
            "price": 6500,
            "image": "https://cdn4.chrono24.com/images/topmodels/2875-7wlcl6ogfoc0qxg22ox6up9m-Original.png?auto=compress&amp;h=305",
            "category": {
                "nombre": "oferta",
                "id": "oferta"
            }
        },
        {
            "id": 3,
            "title": "Tapado",
            "price": 15000,
            "image": "https://cdn4.chrono24.com/images/topmodels/1177-wugpfdlkkz5ie2od4y1w8rlm-Original.png?auto=compress&amp;h=305",
            "category": {
                "nombre": "oferta",
                "id": "oferta"
            }
        },
        {
            "id": 4,
            "title": "Jean Basico",
            "price": 4000,
            "image": "https://cdn4.chrono24.com/images/topmodels/1065-ae2seivfjwbgqxgobd7rimxu-Original.png?auto=compress&amp;h=305",
            "category": {
                "nombre": "oferta",
                "id": "oferta"
            }
        },
        {
            "id": 5,
            "title": "Bikini",
            "price": 6500,
            "image": "https://cdn4.chrono24.com/images/topmodels/48-coj40rpfx8fwxs9h0nl1l5z5-Original.png?auto=compress&amp;h=305",
            "category": {
                "nombre": "oferta",
                "id": "oferta"
            }

        },
        {
            "id": 6,
            "title": "Remera Basica",
            "price": 4500,
            "image": "https://cdn4.chrono24.com/images/topmodels/1023-knl4kmo66jmse324vzq1rit9-Original.png?auto=compress&amp;h=305",
            "category": {
                "nombre": "oferta",
                "id": "oferta"
            }

        },
        {
            "id": 7,
            "title": "Camisa Leñadora",
            "price": 5500,
            "image": "https://cdn4.chrono24.com/images/topmodels/2889-i234z41cn7v0n4vanfhte4w4-Original.png?auto=compress&amp;h=305",
            "category": {
                "nombre": "oferta",
                "id": "oferta"
            }
        },
        {
            "id": 8,
            "title": "Remera + Jean",
            "price": 10500,
            "image": "https://cdn4.chrono24.com/images/topmodels/277-q51jko3qp053cwsfydfnmp8r-Original.png?auto=compress&amp;h=305",
            "category": {
                "nombre": "oferta",
                "id": "oferta"
            }
        },
        {
            "id": 9,
            "title": "Conjunto 1    ",
            "price": 10000,
            "image": "https://cdn4.chrono24.com/images/topmodels/2784-sol59z6xc26pvisg1s4yyhz7-Original.png?auto=compress&amp;h=305",
            "category": {
                "nombre": "hombre",
                "id": "hombre"
            }
        },
        {
            "id": 10,
            "title": "Conjunto 2",
            "price": 12000,
            "image": "https://cdn4.chrono24.com/images/topmodels/1060-60mnke18crk8dtva1dday8aq-Original.png?auto=compress&amp;h=305",
            "category": {
                "nombre": "hombre",
                "id": "hombre"
            }
        },
        {
            "id": 11,
            "title": "Conjunto 3",
            "price": 9000,
            "image": "https://cdn4.chrono24.com/images/topmodels/2789-kz9cslhfzhl5hluyhyik13vh-Original.png?auto=compress&amp;h=305",
            "category": {
                "nombre": "hombre",
                "id": "hombre"
            }
        },
        {
            "id": 12,
            "title": "Conjunto 4",
            "price": 11000,
            "image": "https://cdn4.chrono24.com/images/topmodels/1024-kun413lxk7kb6xba9sow5f81-Original.png?auto=compress&amp;h=305",
            "category": {
                "nombre": "hombre",
                "id": "hombre"
            }
        },
        {
            "id": 13,
            "title": "Conjunto 5",
            "price": 15000,
            "image": "https://cdn4.chrono24.com/images/topmodels/2827-syc8dandfne5fr49dsnu9oai-Original.png?auto=compress&amp;h=305",
            "category": {
                "nombre": "hombre",
                "id": "hombre"
            }
        },
        {
            "id": 14,
            "title": "Conjunto 6",
            "price": 14000,
            "image": "https://cdn4.chrono24.com/images/topmodels/71-js248idvdav3retnmx2uc6wx-Original.png?auto=compress&amp;h=305",
            "category": {
                "nombre": "hombre",
                "id": "hombre"
            }
        },
        {
            "id": 15,
            "title": "Conjunto 1    ",
            "price": 10000,
            "image": "https://cdn4.chrono24.com/images/topmodels/1176-hs3tqa0p4c96tsxn2cn2uo6w-Original.png?auto=compress&amp;h=305",
            "category": {
                "nombre": "Mujeres",
                "id": "mujeres"
            }
        },
        {
            "id": 16,
            "title": "Conjunto 2",
            "price": 5000,
            "image": "https://cdn4.chrono24.com/images/topmodels/1058-1jormktv8artxf3enlapuh13-Original.png?auto=compress&amp;h=305",
            "category": {
                "nombre": "Mujeres",
                "id": "mujeres"
            }
        },
        {
            "id": 17,
            "title": "Conjunto 3",
            "price": 8000,
            "image": "https://cdn4.chrono24.com/images/topmodels/2884-5ef4thk0sttcydmk5692nply-Original.png?auto=compress&amp;h=305",
            "category": {
                "nombre": "Mujeres",
                "id": "mujeres"
            }

        },
        {
            "id": 18,
            "title": "Conjunto 4",
            "price": 12000,
            "image": "https://cdn4.chrono24.com/images/topmodels/1024-kun413lxk7kb6xba9sow5f81-Original.png?auto=compress&amp;h=305",
            "category": {
                "nombre": "Mujeres",
                "id": "mujeres"
            }

        },
        {
            "id": 19,
            "title": "Conjunto 5",
            "price": 11000,
            "image": "https://cdn4.chrono24.com/images/topmodels/53-qr7rjp3uwl4jco6w9zezewr6-Original.png?auto=compress&amp;h=305",
            "category": {
                "nombre": "Mujeres",
                "id": "mujeres"
            }
        },
        {
            "id": 20,
            "title": "Conjunto 6",
            "price": 15000,
            "image": "https://cdn4.chrono24.com/images/topmodels/242-uk37he1f5vgdtk9unr5570ct-Original.png?auto=compress&amp;h=3055",
            "category": {
                "nombre": "Mujeres",
                "id": "mujeres"
            }
        },
        {
            "id": 21,
            "title": "Conjunto 1    ",
            "price": 8000,
            "image": "https://cdn4.chrono24.com/images/topmodels/118-6lbsu9lmivq8w0y0nqrk5j45-Original.png?auto=compress&amp;h=305",
            "category": {
                "nombre": "Niños",
                "id": "kids"
            }
        },
        {
            "id": 22,
            "title": "Conjunto 2",
            "price": 11000,
            "image": "https://cdn4.chrono24.com/images/topmodels/1060-60mnke18crk8dtva1dday8aq-Original.png?auto=compress&amp;h=305",
            "category": {
                "nombre": "Niños",
                "id": "kids"
            }
        },
        {
            "id": 23,
            "title": "Conjunto 3",
            "price": 15000,
            "image": "https://cdn4.chrono24.com/images/topmodels/954-oel0a5omxgsfsc717gx0p1na-Original.png?auto=compress&amp;h=305",
            "category": {
                "nombre": "Niños",
                "id": "kids"
            }
        },
        {
            "id": 24,
            "title": "Conjunto 4",
            "price": 10000,
            "image": "https://cdn4.chrono24.com/images/topmodels/2848-rrxe8hk918f7plrrfgzbxt65-Original.png?auto=compress&amp;h=305",
            "category": {
                "nombre": "Niños",
                "id": "kids"
            }
        },
        {
            "id": 25,
            "title": "Conjunto 5",
            "price": 13000,
            "image": "https://cdn4.chrono24.com/images/topmodels/2848-rrxe8hk918f7plrrfgzbxt65-Original.png?auto=compress&amp;h=305",
            "category": {
                "nombre": "Niños",
                "id": "kids"
            }
        },
        {
            "id": 26,
            "title": "Conjunto 6",
            "price": 11000,
            "image": "https://cdn4.chrono24.com/images/topmodels/2848-rrxe8hk918f7plrrfgzbxt65-Original.png?auto=compress&amp;h=305",
            "category": {
                "nombre": "Niños",
                "id": "kids"
            }
        },
        {
            "id": 27,
            "title": "Nombre del Producto 1",
            "price": 15000,
            "image": "https://cdn4.chrono24.com/images/topmodels/2848-rrxe8hk918f7plrrfgzbxt65-Original.png?auto=compress&amp;h=305",
            "category": {
                "nombre": "Accesorios",
                "id": "accesorios"
            }
        },
        {
            "id": 28,
            "title": "Nombre del Producto 2",
            "price": 22000,
            "image": "https://cdn4.chrono24.com/images/topmodels/2848-rrxe8hk918f7plrrfgzbxt65-Original.png?auto=compress&amp;h=305",
            "category": {
                "nombre": "Accesorios",
                "id": "accesorios"
            }
        },
        {
            "id": 29,
            "title": "Nombre del Producto 3",
            "price": 18000,
            "image": "https://cdn4.chrono24.com/images/topmodels/2848-rrxe8hk918f7plrrfgzbxt65-Original.png?auto=compress&amp;h=305",
            "category": {
                "nombre": "Accesorios",
                "id": "accesorios"
            }
        },
        {
            "id": 30,
            "title": "Nombre del Producto 4",
            "price": 10000,
            "image": "https://cdn4.chrono24.com/images/topmodels/2848-rrxe8hk918f7plrrfgzbxt65-Original.png?auto=compress&amp;h=305",
            "category": {
                "nombre": "Accesorios",
                "id": "accesorios"
            }
        },
        {
            "id": 31,
            "title": "Nombre del Producto 5",
            "price": 10000,
            "image": "https://cdn4.chrono24.com/images/topmodels/2848-rrxe8hk918f7plrrfgzbxt65-Original.png?auto=compress&amp;h=305",
            "category": {
                "nombre": "Accesorios",
                "id": "accesorios"
            }
        },
        {
            "id": 32,
            "title": "Nombre del Producto 6",
            "price": 12000,
            "image": "https://cdn4.chrono24.com/images/topmodels/2848-rrxe8hk918f7plrrfgzbxt65-Original.png?auto=compress&amp;h=305",
            "category": {
                "nombre": "Accesorios",
                "id": "accesorios"
            }
        },
        {
            "id": 33,
            "title": "Nombre del Producto 7",
            "price": 12000,
            "image": "https://cdn4.chrono24.com/images/topmodels/2848-rrxe8hk918f7plrrfgzbxt65-Original.png?auto=compress&amp;h=305",
            "category": {
                "nombre": "Accesorios",
                "id": "accesorios"
            }
        },
        {
            "id": 34,
            "title": "Nombre del Producto 8",
            "price": 9000,
            "image": "https://cdn4.chrono24.com/images/topmodels/2848-rrxe8hk918f7plrrfgzbxt65-Original.png?auto=compress&amp;h=305",
            "category": {
                "nombre": "Accesorios",
                "id": "accesorios"
            }
        },
        {
            "id": 35,
            "title": "Nombre del Producto 9",
            "price": 10000,
            "image": "https://cdn4.chrono24.com/images/topmodels/2848-rrxe8hk918f7plrrfgzbxt65-Original.png?auto=compress&amp;h=305",
            "category": {
                "nombre": "Accesorios",
                "id": "accesorios"
            }
        },
        {
            "id": 36,
            "title": "Nombre del Producto 10",
            "price": 12000,
            "image": "https://cdn4.chrono24.com/images/topmodels/2848-rrxe8hk918f7plrrfgzbxt65-Original.png?auto=compress&amp;h=305",
            "category": {
                "nombre": "Accesorios",
                "id": "accesorios"
            }
        },
        {
            "id": 37,
            "title": "Nombre del Producto 11",
            "price": 12000,
            "image": "https://cdn4.chrono24.com/images/topmodels/2848-rrxe8hk918f7plrrfgzbxt65-Original.png?auto=compress&amp;h=305",
            "category": {
                "nombre": "Accesorios",
                "id": "accesorios"
            }
        },
        {
            "id": 38,
            "title": "Nombre del Producto 12",
            "price": 9000,
            "image": "https://cdn4.chrono24.com/images/topmodels/2848-rrxe8hk918f7plrrfgzbxt65-Original.png?auto=compress&amp;h=305",
            "category": {
                "nombre": "Accesorios",
                "id": "accesorios"
            }
        },
        {
            "id": 39,
            "title": "Nombre del Producto 13",
            "price": 15000,
            "image": "https://cdn4.chrono24.com/images/topmodels/2848-rrxe8hk918f7plrrfgzbxt65-Original.png?auto=compress&amp;h=305",
            "category": {
                "nombre": "Accesorios",
                "id": "accesorios"
            }
        },
        {
            "id": 40,
            "title": "Nombre del Producto 14",
            "price": 12000,
            "image": "https://cdn4.chrono24.com/images/topmodels/2848-rrxe8hk918f7plrrfgzbxt65-Original.png?auto=compress&amp;h=305",
            "category": {
                "nombre": "Accesorios",
                "id": "accesorios"
            }
        },
        {
            "id": 41,
            "title": "Nombre del Producto 15",
            "price": 25000,
            "image": "https://cdn4.chrono24.com/images/topmodels/2848-rrxe8hk918f7plrrfgzbxt65-Original.png?auto=compress&amp;h=305",
            "category": {
                "nombre": "Accesorios",
                "id": "accesorios"
            }
        },
        {
            "id": 42,
            "title": "Nombre del Producto 16",
            "price": 17000,
            "image": "https://cdn4.chrono24.com/images/topmodels/2848-rrxe8hk918f7plrrfgzbxt65-Original.png?auto=compress&amp;h=305",
            "category": {
                "nombre": "Accesorios",
                "id": "accesorios"
            }
        }
    
]; */
 
let productos=[];

   fetch("./js/producto.json")
    .then(response => response.json())
    .then(data =>{
        productos = data;
        cargar_producto(productos);
    }) 



      
 
const contenedor_productos= document.querySelector("#contenedor_productos");
const btn_categorias =document.querySelectorAll(".btn_categoria");
const titulo_principal=document.querySelector("#titulo_principal");
let boton_agregar= document.querySelectorAll(".btn_agregar");
const numerito = document.querySelector("#numerito");

function cargar_producto(productos_elegidos){
   
    contenedor_productos.innerHTML="";

    productos_elegidos.forEach(productos =>{

        const div= document.createElement("div");
        div.classList.add("producto");
        div.innerHTML =`
        
            <div class="producto">
                <figure class="figure">
                    <img src="${productos.image}" loading="lazy" class="figure-img img-fluid rounded" alt="...">
                    <div>
                    <h5>${productos.title}</h5>

                    <div class="d-flex justify-content-center  align-items-center ">
                      <div class="p-1">
                        
                      </div>                     
                      
                    </div>                
                   
                                      
                    <p class="m-1">Precio:$ <span>${productos.price}</span></p>
                    
                    <button id="${productos.id} " class="btn btn-outline-secondary btn_agregar" type="button">Añadir al Carrito</button>
                    </div>
                  </figure>           
            </div>
      
        `;
        contenedor_productos.append(div);
    })
   actualizar_botones_agregar(); 
}

/* cargar_producto(productos); */

btn_categorias.forEach (boton => {
    boton.addEventListener("click", (e)=>{
               
         if(e.currentTarget.id != "todos"){
            const titulo_categoria = productos.find(productos => productos.category.id === e.currentTarget.id );
            titulo_principal.innerText = titulo_categoria.category.nombre;             

            const productos_categorias =productos.filter (productos => productos.category.id === e.currentTarget.id );
            cargar_producto(productos_categorias);

         }else{
            titulo_principal.innerText= "Todos los Productos";
            cargar_producto(productos);
         }
        
       })
})

function actualizar_botones_agregar(){
    boton_agregar= document.querySelectorAll(".btn_agregar");

    boton_agregar.forEach(boton =>{
        boton.addEventListener("click", agregar_carrito);
    } )
}

let productos_carrito;

let productos_carrito_LS = localStorage.getItem("productos_carrito");

if(productos_carrito_LS){
     productos_carrito = JSON.parse(productos_carrito_LS);
      actualizarNumerito(); 
    }else{
    productos_carrito=[];
}

function agregar_carrito(e){
    Toastify({
        text: "Producto Agregado",
        duration: 3000,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #83827f, #83827f)",
          borderRadius: "2rem",
          textTransform: "uppercase",
          fontSize: ".75rem"
        },
        offset: {
            x: '1.5rem', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: '1.5rem' // vertical axis - can be a number or a string indicating unity. eg: '2em'
          },
        onClick: function(){} // Callback after click
      }).showToast();

    const idBoton = e.currentTarget.id;    
    const productos_agregados = productos.find (productos => productos.id == idBoton);

    if(productos_carrito.some(productos => productos.id == idBoton)){
        const index= productos_carrito.findIndex(productos =>  productos.id == idBoton )
        productos_carrito[index].cantidad++;
    }else{
        productos_agregados.cantidad= 1;
        productos_carrito.push(productos_agregados);
    }
    
    actualizarNumerito(); 

    localStorage.setItem("productos_carrito", JSON.stringify(productos_carrito));    
};


 function actualizarNumerito(){
    let nuevoNumerito = productos_carrito.reduce((ac, productos) => ac + productos.cantidad, 0);
    numerito.innerText = nuevoNumerito;
} 