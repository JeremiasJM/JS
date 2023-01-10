let arreglo_producto = [];

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

    /* arreglo_producto.push(producto);
    
    let arreglo_JSON = JSON.stringify(arreglo_producto);

    localStorage.setItem("arreglo_producto", arreglo_JSON); 
    
    let recuperando_arreglo = localStorage.getItem("arreglo_producto");
    console.log(recuperando_arreglo);

    recuperando_arreglo = JSON.parse(recuperando_arreglo);
    console.log(recuperando_arreglo); */

     
    mostrar_carrito(producto);  
 }

/* function mostrar_carrito(){
    let recuperando_arreglo = localStorage.getItem("arreglo_producto");

    recuperando_arreglo = JSON.parse(recuperando_arreglo);


    let fila = document.createElement("tr");
    fila.innerHTML = `<td><img class=" w-25"  src="${recuperando_arreglo.img}"></td>
                      <td>${recuperando_arreglo.nombre}</td>
                      <td>${recuperando_arreglo.precio}</td>
                      <td>${recuperando_arreglo.cantidad}</td>
                      <td>${recuperando_arreglo.talla}</td>                      
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
} */
function mostrar_carrito(producto){

    let fila = document.createElement("tr");
    fila.innerHTML =`<td><img class=" w-25"  src="${producto.img}"></td>
                     <td>${producto.nombre}</td>
                     <td>${producto.precio}</td>
                     <td>${producto.cantidad}</td>
                     <td>${producto.talla}</td>
                     <td> <button type="button" class="btn btn-danger btn_borrar">Borrar</button></td> `;

     

     let tabla= document.getElementById("tbody");
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