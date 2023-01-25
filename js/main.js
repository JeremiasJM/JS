let carrito = [];

function agregar_a_carrito(e){
    
    let hijo = e.target;
    let padre = hijo.parentNode;
    let abuelo = padre.parentNode;

    let nombre_producto = padre.querySelector("h5").textContent;
    let precio_producto = padre.querySelector("span").textContent;
    let img_producto = abuelo.querySelector("img").src;
    let cantidad_producto = padre.querySelector("input").value;    
    let talla_producto = padre.querySelector ("option").textContent;
 
    let producto = {
        nombre: nombre_producto,
        precio: precio_producto,
        img : img_producto,
        cantidad: cantidad_producto,
        talla: talla_producto,
    };

    carrito.push(producto);
    
    let carrito_JSON = JSON.stringify(carrito);

    localStorage.setItem("carrito", carrito_JSON); 
    
    let recuperando_carrito= localStorage.getItem("carrito");
    console.log(recuperando_carrito);

    recuperando_carrito = JSON.parse(recuperando_carrito);
    console.log(recuperando_carrito);

     
    mostrar_carrito(producto);  
 }

function mostrar_carrito(){
    let recuperando_carrito= localStorage.getItem("carrito");
   
    recuperando_carrito = JSON.parse(recuperando_carrito);
   


    let fila = document.createElement("tr");
    fila.innerHTML = `<td><img class=" w-25"  src="${recuperando_carrito[0].img}"></td>
                      <td>${recuperando_carrito[0].nombre}</td>
                      <td>${recuperando_carrito[0].precio}</td>
                      <td>${recuperando_carrito[0].cantidad}</td>
                      <td>${recuperando_carrito[0].talla}</td>                      
                      <td> <button type="button" class="btn btn-danger btn_borrar">Borrar</button></td> `

     let tabla = document.getElementById("tbody");
     tabla.append(fila);

     let btn_borrar = document.querySelectorAll(".btn_borrar");

     for(let boton of btn_borrar){
        boton.addEventListener("click", borrar_producto);
         }

}
function borrar_producto(e){
    let abuelo=e.target.parentNode.parentNode;
    abuelo.remove();
}

let btn_agregar = document.querySelectorAll(".btn_agregar");

for(let boton of btn_agregar){
    boton.addEventListener("click", agregar_a_carrito)
}

 




