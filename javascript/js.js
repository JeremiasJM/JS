let pepsi = 1900;
let mirinda = 1900;
let seven = 1900;
let seven_free = 1900;
let coca_cola2 = 2200;
let fanta2 = 2200;
let sprite2 = 2200;
let secco3 = 950;

//
let totalpepsi = 0;
let totalmirinda = 0;
let totalseven = 0;
let totalseven_free = 0;
let totalcoca_cola2 = 0;
let totalfanta2 = 0;
let totalsprite2 = 0;
let totalsecco3 = 0;
let cantidad = 0;


function calcular_total(){
    
    let total=  totalpepsi+totalmirinda+totalseven+totalseven_free+totalcoca_cola2+totalfanta2+totalsprite2+ totalsecco3;
    console.log("total a pagar: $", total); 
}



console.log( "Bienvenidos");


 let producto = parseInt(prompt("Elija el o los producto que desecea comprar. Para ver los productos y sus precios presione el numero 1"));



 while( producto == 1){

    console.log("Pepsi $1900");
    console.log("Mirinda $1900");
    console.log("Seven $1900");
    console.log("Seven Free $1900");
    console.log("Coca Cola 2L $2200");
    console.log("Fanta 2L $2200");
    console.log("Sprite 2L $2200");
    console.log("Secco 3L $950");  

    bebida = prompt("Para elejir la bebida que quiere comprar escriba el nombre de la misma");
    while(bebida == "pepsi" || bebida == "mirinda" || bebida == "seven" || bebida == "sevenfree" || bebida == "cocacola" || bebida == "fanta" || bebida == "sprite" || bebida == "secco" && bebida !=0 ){
        
        cantidad = parseInt(prompt("Ingrese la cancidad que desea comprar"));

        if(bebida=="pepsi"){
            totalpepsi = pepsi * cantidad;
        }

        if(bebida=="mirinda"){
            totalmirinda = mirinda * cantidad;
        }

        if(bebida=="seven"){
            totalseven = seven * cantidad;
        }

        if(bebida=="sevenfree"){
            totalseven_free = seven_free * cantidad;
        }

        if(bebida=="cocacola"){
            totalcoca_cola2 = coca_cola2 * cantidad;
        }

        if(bebida=="fanta"){
            totalfanta2 = fanta2 * cantidad;
        }

        if(bebida=="sprite"){
            totalsprite2 = sprite2 * cantidad;
        }

        if(bebida=="secco"){
            totalsecco3 = secco3 * cantidad;
        }

     

        bebida = prompt("Si quiere elegir otra bebida escriba el nombre, de lo contrario presione el numero 0");
    }

    producto = parseInt(prompt("Si desea comprar otra cosa precione 1 sino precione 0"));
     
}; 
calcular_total();

 console.log("Muchas Gracias por su Compra");




