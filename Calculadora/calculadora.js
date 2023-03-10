let operador = '';
let primerNumero = '';
let segundoNumero = '';
let resultado = '';
let estado = false;

function escribir(num) {
  let tablero = document.getElementById('Tablero');
  if (estado) {
    tablero.innerHTML = '';
    estado = false;
  }
  tablero.innerHTML += num;
}

function operacion(op) {
  let tablero = document.getElementById('Tablero');
  operador = op;
  primerNumero = tablero.innerHTML;
  tablero.innerHTML += " " + operador + " ";
}

function calcular() {
  let tablero = document.getElementById('Tablero');
  let operacionCompleta = tablero.innerHTML;
  let partes = operacionCompleta.split(' ');

  primerNumero = parseFloat(partes[0]);
  operador = partes[1];
  segundoNumero = parseFloat(partes[2]);

  switch (operador) {
    case '+':
      resultado = primerNumero + segundoNumero;
      break;
    case '-':
      resultado = primerNumero - segundoNumero;
      break;
    case '*':
      resultado = primerNumero * segundoNumero;
      break;
    case '/':
      resultado = primerNumero / segundoNumero;
      break;
    default:
      break;
  }

  tablero.innerHTML = resultado;
  estado = true;
}

function borrar() {
  let tablero = document.getElementById('Tablero');
  tablero.innerHTML = tablero.innerHTML.slice(0, -1);
}

function borrarTodo() {
  let tablero = document.getElementById('Tablero');
  tablero.innerHTML = '';
  operador = '';
  primerNumero = '';
  segundoNumero = '';
  resultado = '';
  estado = false;
}
