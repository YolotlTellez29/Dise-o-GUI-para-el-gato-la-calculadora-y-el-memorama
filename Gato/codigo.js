var tablero = ["", "", "", "", "", "", "", "", "", ""];
var jugador = "X";
function tirar(n) {
     if (tablero[n]!="") return;
     tablero[n]=jugador;
     //document.getElementById("boton" + n).style.backgroundImage = "url('../" + jugador + ".gif')";
     document.getElementById("boton" + n).style.backgroundImage = "url('gifs/" + jugador + ".gif')";
     validarGanador();
     if (jugador == "X") {
         jugador = "O";
     } else {
         jugador = "X";
     }
}
function validarGanador() {
    let combinacion = "XXX";
    if (jugador == "O") combinacion = "OOO";

    if (tablero[1] + tablero[2] + tablero[3] == combinacion ||
        tablero[4] + tablero[5] + tablero[6] == combinacion ||
        tablero[7] + tablero[8] + tablero[9] == combinacion ||
        tablero[1] + tablero[4] + tablero[7] == combinacion ||
        tablero[2] + tablero[5] + tablero[8] == combinacion ||
        tablero[3] + tablero[6] + tablero[9] == combinacion ||
        tablero[1] + tablero[5] + tablero[9] == combinacion ||
        tablero[3] + tablero[5] + tablero[7] == combinacion) {
            alert("¡Ganaste, jugador " + jugador + "!");
        }
}