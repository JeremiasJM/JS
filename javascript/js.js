let total=0;
let cantidad=0;
let total_pagar=0;
const lista_productos=[ 
    { Bebidas:"pepsi" , Precio: 1950},
    { Bebidas:"mirinda", Precio: 2000},
    { Bebidas:"seven" , Precio: 2200},
    { Bebidas:"coca cola", Precio: 2300},
    { Bebidas:"fanta" , Precio: 2350},
    { Bebidas:"sprite", Precio: 2400},
    { Bebidas:"secco" , Precio: 2550},
    { Bebidas:"torasso", Precio: 2600},

]

console.log( "Bienvenidos");

let inicio= parseInt(prompt("Presione el numero 1 para iniciar su compra y ver el listado de productos"));


while(inicio==1){ 

    console.log(lista_productos);

function buscar_producto(lista_producto){
    return lista_producto.Bebidas == compra_usuario;
}

let compra_usuario = prompt("Ingrese el nombre del producto que desea comprar");
compra_usuario=compra_usuario.toLowerCase();

let resultado_find = lista_productos.find(buscar_producto);

if(resultado_find != undefined){
   
    cantidad = parseInt(prompt("Elija la cantidad que desea comprar"));
    precios=lista_productos.Precio;

    total=resultado_find.Precio*cantidad;
    
    total_pagar=total_pagar+total;
  
}
else{
    console.log("No tenes el producto que desea comprar")   
     
}


inicio=parseInt(prompt("Si desea Finalizar su compra precione el numero 0, si desea seguir comprando precione el numero 1"));
}
console.log("Total a pagar:", total_pagar);
console.log("Gracias Por su Compra");