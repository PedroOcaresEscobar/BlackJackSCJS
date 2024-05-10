//elementos => Las weas que contiene el arreglo
//index o indice es la posicion en la cual esta el elemento

let zapatillas = new Array("DC","Adidas Classic","Nike Jordan");//antigua forma de definir arreglos

let animales = ["Gato","Perro","Raton","Gato"]; //nueva forma de definir arreglos

zapatillas[3] = ["Power"];//agregar en el indice 3 el elemento "Power"

animales.push("Lagarto","Gallo");//Agregar al Final del arreglo  elementos

/*Salida de consultas - Console.log */

console.log(zapatillas[2]);//sin los corchetes apunta a todos

console.log(zapatillas.length)//devuelve el numero de elementos si devuelve 3 el indice llega hasta el 2 

console.log(animales.join(" ! "))//separa los elementos con los caracteres que este en las comillas
console.log(zapatillas.join(" - "))//separa los elementos con los caracteres que este en las comillas

zapatillas.splice(1,1,"wea","buena")//zapatillas.slice(index,cantidad,reemplace) el primero indica desde donde, luego cuantos y finalmente nuevos elementos

console.log(zapatillas[2]);//sin los corchetes apunta a todos

console.log(zapatillas.length)//devuelve el numero de elementos si devuelve 3 el indice llega hasta el 2 

console.log(animales.join(" ! "))//separa los elementos con los caracteres que este en las comillas
console.log(zapatillas.join(" - "))//separa los elementos con los caracteres que este en las comillas

console.log(zapatillas.includes("DC"))//devuelve true o false si esta el elemento

console.log(animales.indexOf("Gato"))//busca el indice el primer elemento

console.log(animales.lastIndexOf("Gato"))//busca el indice el ultimo  elemento
console.log(zapatillas.lastIndexOf("Lider"))//busca el indice el ultimo  elemento. Si lastIndexOf o indexOf devuelven -1 es porque no existe

let monedas = ["euro","dolar","peso","libra"];

//Iteraciones For loop
for (let i = 0;i < monedas.length;i++){
    console.log(monedas[i]);
}

for (let i = monedas.length-1;i >= 0;i--){
    console.log(monedas[i]);
}
//for of muestra los elementos
for(let i of animales){
    console.log(i);
}
//for in muestra los indices
for(let i in animales){
    console.log(i);
}

animales.sort();//ordena alfabeticamente
for(let i of animales){
    console.log(i);
}
animales.sort().reverse();//ordena alfabeticamente al reves
for(let i of animales){
    console.log(i);
}
//creo arraiz with numbers 
let numeros = [1,33,4,66,7,44,41];
for (let i of numeros){
    console.log(i)
}
numeros.sort();
for (let i of numeros){
    console.log(i)
}
numeros.sort((a,b) => a - b);//sort con esta logica dentro indicamos que el elemento entero es numero
for (let i of numeros){
    console.log(i)
}


/*Ejemplo de carrito*/
let carrito = [];//se crea el carro
carrito.push("Polera");//se agrega elemento
carrito.push("Toalla");//se agrega elemento
carrito.push("Pantalon");//se agrega elemento
console.log(carrito);//consulta carrito por consola
carrito.pop();//se borra el ultimo
console.log(carrito);//consulta carrito por consola
carrito.shift();//se borra el primero
console.log(carrito);//consulta carrito por consola

//Array de objetos 
const personajes = [
    {name:"Jsessica Jones", age:33},
    {name:"Pedro Ocares", age:28},
    {name:"byron Mardito", age:13},
    {name:"Hellen Estay", age:35},
];
//Iteracion de array por personaje
for(let i of personajes){
    console.log(i);
    console.log(i.name);//si se agrega el .name solo muestra esa "columna"
}
//sort solo para los arreglo de objetos no funciona, se tiene que usar con la logica para cada caso
personajes.reverse();
for(let i of personajes){
    console.log(i);
    console.log(i.name);//si se agrega el .name solo muestra esa "columna"
}
personajes.sort((a,b) => a.age - b.age).reverse();
for(let i of personajes){
    console.log(i);
    console.log(i.name);//si se agrega el .name solo muestra esa "columna"
}
//en esta logica del sort si no ponemos el b.name los ordena de z->a y si se incluye de a->z
personajes.sort((a,b) => a.name.localeCompare(b.name));
for(let i of personajes){
    console.log(i);

}
personajes.sort((a,b) => a.name.localeCompare());
for(let i of personajes){
    console.log(i);

}


//loop dentro de un loop
let tecladoFono = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    ["*",0,"#"],
];
for(let i = 0; i < tecladoFono.length ;i++){
    for(let j = 0; j < tecladoFono[i].length ;j++){
        document.write(tecladoFono[i][j]);
    }
    document.write("<br>")
};
//matriz  e insercion de datos EJEMPLO
let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];
matriz[0][0] = "X";
matriz[1][1] = "X";
matriz[2][2] = "X";
for(let i of matriz){
    const row_string = i.join(" ")
    console.log(row_string)
}


//juego el truco////////////////////////////////////////////////////////////////////////////////////////////////////////
let trucoDeck = [];//maso
const suits = ["espada","baston","copa","oro"];
let playerHands = [];//mano de los jugadores
const ranks = ["1","2","3","4","5","6","7","8","9","10","11","12"];

function createTrucoDeck(){
    for(let suit of suits){
        for(let rank of ranks){
            trucoDeck.push({rank:rank,suit: suit})
        }
    }

};

//algoritmo de intercambio de valores [a,b] = [b,a]
function shuffleTrucoDeck(){
    for(let i = trucoDeck.length-1; i > 0 ;i--){
        const j = Math.floor(Math.random() * (i + 1));
        [trucoDeck[i], trucoDeck[j]] = [trucoDeck[j], trucoDeck[i]];
    }
};

function dealCards(numPlayer){
    for(let i = 0; i < numPlayer ;i++){
        const hand = [];
        for(let j = 0 ;j < 2; j++){
            hand.push(trucoDeck.pop());
        }
        playerHands.push(hand);
    }
};


createTrucoDeck();
shuffleTrucoDeck();


console.log("1 vs 1:");
dealCards(2);
console.log("player 1's hand:", playerHands[0]);
console.log("player 2's hand:", playerHands[1]);


/* **************************************************** */
// Probando mi juego antes de mostrarlo...
/* console.log("modalidad 1 vs 1:");
dealCards(2);
console.log("Player 1's hand:", playerHands[0]);
console.log("Player 2's hand:", playerHands[1]); */
/* **************************************************** */

// Solicitamos al usuario/cliente el tipo de juego a través de mi INPUT
const numPlayers = parseInt(
    prompt(`Elija jugadores:\n(2) 1 vs 1\n(4) 2 vs 2\n(6) 3 vs 3`)
  );
  
  // 1er OUTPUT
  switch (numPlayers) {
    case 2:
      alert("Player 1 es team 1 y Player 2 es team 2");
      dealCards(numPlayers);
      break;
    case 4:
      alert("Player 1 y Player 3 son team 1 / Player 2 y Player 4 son team 2");
      dealCards(numPlayers);
      break;
    case 6:
      alert(
        "Player 1, Player 3 y Player 5 son team 1 / Player 2, Player 4 y Player 6 son team 2"
      );
      dealCards(numPlayers);
      break;
    default:
      alert(
        "Número de jugadores no válido. Por favor, elige 2, 4 o 6 jugadores."
      );
      break;
  }
  
  // 2do OUTPUT
  let msg = "";
  for (let i = 0; i < numPlayers; i++) {
    msg += `Player ${i + 1}'s hand: `;
    for (let card of playerHands[i]) {
      msg += `[${card.rank} of ${card.suit}], `;
    }
    msg = msg.slice(0, -2); // Eliminando la coma y el espacio final
    msg += "\n";
  }
  
  console.log4(msg);