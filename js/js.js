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

