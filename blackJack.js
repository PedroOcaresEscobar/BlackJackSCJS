//              BLACK JACK
/*Bienvenido a este pseudo simulador de Black Jack creado por Pedro Ocares, basado en el código del juego "Truco"
 entregador por profesor de CoderHouse, este código toma como base el código antes mencionado para recrear un
 simulador de black jack básico en js el cual pregunta por prompt cuantos jugadores se mostraran con opciones del 1 al 6
 luego mostrara por consola las cartas de cada jugador y ademas del repartidor, con esta vision de las cartas
 se pregunta por prompt (s/n) para saber si el jugador i quiere otra carta, si el jugador cumple para ganar,
 gana por consola automáticamente y si pierde, pierde por consola automáticamente no obstante si 
 el jugador solo obtiene cartas bajas puede pedir más de una carta hasta que se cumplan las condiciones
 sumaJugador > 21,  sumaJugador > sumaRepartidor.

Se solicita que se  trabajen variables, constantes, arreglos, control de ciclo, funciones que se utilicen prompt, confirm y alert
si bien se reutilizo código mostrado en clases, se crearon 4 funciones adicionales para controlar las reglas del nuevo juego
las cuales contienen todo lo mencionado anteriormente en lo solicitado.

*/
const numPlayers = parseInt(prompt(`Elija jugadores:\n(1) Dealer vs 1\n(2) Dealer vs 2\n(3) Dealer vs 3\n(4) Dealer vs 4\n(5) Dealer vs 5\n(6) Dealer vs 6`));
let deck = [];
const suits = ["Picas", "Tréboles", "Corazones", "Diamante"];
let playerHands = [];
const ranks = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

function createDeck() {
    for (let suit of suits) {
        for (let rank of ranks) {
            deck.push({ rank: rank, suit: suit });
        }
    }
}

function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

function dealCards(numPlayers) {
    // Inicializar la mano del dealer
    const dealerHand = [];
    // Repartir cartas a los jugadores
    for (let i = 0; i < numPlayers; i++) {
        const hand = [];
        for (let j = 0; j < 2; j++) {
            hand.push(deck.pop());
        }
        playerHands.push(hand);
    }
    // Repartir cartas al dealer
    for (let j = 0; j < 2; j++) {
        dealerHand.push(deck.pop());
    }
    // Agregar la mano del dealer a playerHands
    playerHands.push(dealerHand);
}

//creamos la function printJugadores para imprimir con una function en vez de suelto
function printJugadores() {
    let mensaje = "";//se crea la variable mensaje 
    for (let i = 0; i < playerHands.length; i++) {//aca usamos playerHands.length directo ya que estamos contabilizando al Dealer o Repartidor y este ocupa el ultimo puesto
        if (i === playerHands.length - 1) { // Si es el dealer ya que ocupa el ultimo lugar en el array, se usa length para leer cuantos participantes hay y luego -1 ya que el indice empieza desde 0
            mensaje += `Repartidor Mano: `;//a la variable mensaje le agregamos "repartidor mano: "
        } else {//sino significa que es un jugador 
            mensaje += `Jugador ${i + 1} Mano: `;//a la variable mensaje le agregamos "jugador x mano: "
        }//ciclo for "of" para completar el mensaje
        for (let card of playerHands[i]) {//creamos variable card para almacenar los elementos del iterable playerHands[x] 
            mensaje += `[${card.rank} de ${card.suit}] y `;//le agregamos a la variable mensaje [(numero del 1 al 12) de ("Picas", "Tréboles", "Corazones", "Diamante")]
        }
        mensaje = mensaje.slice(0, -2); // Eliminar la y el espacio final del mensaje por consola ya que se repite el ciclo al menos 2 veces
        mensaje += "\n";//Agregamos salto de linea para tener un orden al mostrar por consola
    }
    console.log(mensaje);//mostramos la variable mensaje completa por consola. `Jugador ${i + 1} Mano: [(numero del 1 al 12) de ("Picas", "Tréboles", "Corazones", "Diamante")]
}
//funcion calcular mano
function calcularMano(hand){
    let sum = 0; //creamos variable numerica para contener la suma del par de cartas
    let as = false;//creamos variable booleana para contener la respuesta de si salio un "as"
    for(let card of hand){//creamos la variable card para que recorra hand
        if(card.rank === "11" || card.rank === "12"){//si la carta tiene rank 11 o 12 el valor es 10
            sum += 10;
        } else if(card.rank === "1"){//si la carta tiene un rank de 1 es un as o sea vale 11
            sum += 11;
            as = true;
        } else {//si es cualquiera de otra carta que no sea ni 1,11 o 12 sigue todo normal
            sum += parseInt(card.rank)//suma se le asigna una nueva suma la cual se obtiene los caracteres del rank
        }                             //y luego con parseInt los volvemos numeros
    }
    return sum;//retornamos el valor de sum
}

//funcion para agregar otra carta si el jugador lo solicita
function otra(i){
    let sumaJugador= calcularMano(playerHands[i]);//aplicamos la function calcularMano() con playerhand que ya tiene las manos
    while(sumaJugador<= 21){//ciclo while para que se cumpla siemple y cuando el jugador tenga oportunidad de ganar o sea menor a 22
        let decision = prompt(`Jugador ${i+1}, ¿desea otra carta? (s/n)`)//definimos variable decision para saber si es un si o un no la respuesta del jugador a nueva carta
        if(decision.toLowerCase() === 's'){//si es "s" entonces.....(usamos la function preestablecida de js toLowerCase para que el valor de decision se convierta en minusculas)
            playerHands[i].push(deck.pop());//le sumamos una nueva carta a la mano del jugador y la quitamos del mazo
            sumaJugador += calcularMano(playerHands[i]);// calculamos con la nueva mano del jugador
            console.log(`Nueva Carta para el jugador ${i+1}: [${playerHands[i][playerHands[i].length - 1].rank} de ${playerHands[i][playerHands[i].length-1].suit}]`)
        } else if(decision.toLowerCase() === 'n'){//sino si es "n" salimos ya que no necesitamos nada con un break
            break;//rompemos el ciclo
        } else{//sino mostrar por alerta que debe ingresar s o n 
            alert("Por favor, ingrese 's' para tomar otra carta o 'n' para quedarse.");
        }
    }
}
//function  para determinar el ganador y perdedor
function determinarGanador(){
    const sumaRepartidor = calcularMano(playerHands[playerHands.length -1])// creamos variable para suma de repartidor
    for(let i = 0; i < playerHands.length -1; i++){//ciclo for desde 0 hasta donde el numero de jugadores.length para saber el numero de jugadores luego -1 ya que son los indices el numero que necesitamos
        let sumaJugador= calcularMano(playerHands[i]);//creamos variable sumaJugador y le asignamos el resultado de la funcion calcularMano
        otra(i);//llamamos a la funcion otra para ver si el jugador quiere otra carta y calculamos nuevamente el valor de la mano del jugador
        sumaJugador = calcularMano(playerHands[i]);//reasignamos el valor de la nueva mano
        if(sumaJugador > 21){//si la nueva mano es mayor a 21 el jugador pierde
            console.log(`El jugador ${i+1} pierde`)//se muestra por consola que el jugador perdio
        } else if(sumaRepartidor > 21 || sumaRepartidor<sumaJugador){//sino si la suma del repartidor es mayor a 21 o la suma del repartidor es menor a la del jugador 
            console.log(`El jugador ${i+1} gana`)//se muestra por consola que el jugador gana
        } else if(sumaJugador === sumaRepartidor){//sino si la suma del repartidor es igual a la del jugador 
            console.log(`Empate entre Jugador ${i+1} y el Repartidor`)//se muestra por consola que es empate
        } else{//sino el repartidor gana
            console.log(`El Repartidor gana a jugador ${i+1}`)//se muestra por consola que el repartidor gana a jugador x
        }
    }
}

//creamos una función e incorporamos una confirmación si es confirmada se repartirán las cartas entre los jugadores seleccionados
function cantidadJugadores(numPlayers){
    const confirmacion = confirm(`Se han seleccionado ${numPlayers} Jugadores, ¿Desea continuar?`);
    if (confirmacion) {//si se confirma
        dealCards(numPlayers);//se llama a funcion dealCards que reparte las cartas 
    } else {
        console.log("Se cancelo todo y a casa.");//mostramos por consola que se cancelo, ya que se debe haber seleccionado el numero de jugadores incorrecto 
    }
}

//llamamos a la function createDeck para crear el mazo cada numero(rank) del 1 al 12 con su palo(suit) "Picas", "Tréboles", "Corazones", "Diamante".
createDeck();
//llamamos a la function shuffleDeck que es para revolver las cartas del mazo, cambiar el orden. 
shuffleDeck();

//creamos una constante numPlayer para saber cuantos jugadores tendrá el juego

cantidadJugadores(numPlayers);
//llamamos a la function printJugadores que imprime los jugadores por consola
printJugadores();
//Llamamos a la function determinar ganador para saber si quieren otra carta y si luego de eso ganan o pierden y los resultados son mostrados por consola
determinarGanador();
