let cero = () => (document.getElementById("input").value += 0);
let uno = () => (document.getElementById("input").value += 1);
let dos = () => (document.getElementById("input").value += 2);
let tres = () => (document.getElementById("input").value += 3);
let cuatro = () => (document.getElementById("input").value += 4);
let cinco = () => (document.getElementById("input").value += 5);
let seis = () => (document.getElementById("input").value += 6);
let siete = () => (document.getElementById("input").value += 7);
let ocho = () => (document.getElementById("input").value += 8);
let nueve = () => (document.getElementById("input").value += 9);
let punto = () => (document.getElementById("input").value += ".");

let suma = () => {
  let operacion = document.getElementById("input").value;
  if (operacion[operacion.length - 1] != "+") {
    document.getElementById("input").value += "+";
  }
};

let restar = () => {
  let operacion = document.getElementById("input").value;
  if (operacion[operacion.length - 1] != "-") {
    document.getElementById("input").value += "-";
  }
};

let multiplicar = () => {
  let operacion = document.getElementById("input").value;
  if (operacion[operacion.length - 1] != "*") {
    document.getElementById("input").value += "*";
  }
};
let dividir = () => {
  let operacion = document.getElementById("input").value;
  if (operacion[operacion.length - 1] != "/") {
    document.getElementById("input").value += "/";
  }
};

var resultado = 0;

let calcular = () => {
  let operacion = document.getElementById("input").value;

  let signo = [];
  let numeros = [];
  let idNumero = 0;
  let largoNumbero = 0;

  while (isNaN(operacion.charAt(operacion.length - 1))) {
    operacion = operacion.substring(0, operacion.length - 1);
  }

  for (let i = 0; i < operacion.length; i++) {
    if (isNaN(operacion.charAt(i)) && operacion.charAt(i) != ".") {
      if (i == 0 && operacion.charAt(0) == "-") {
      } else {
        if (signo.length != 0) {
          numeros.push(operacion.substr(idNumero + 1, largoNumbero));
        } else {
          numeros.push(operacion.substr(idNumero, largoNumbero));
        }
        signo.push(operacion[i]);
        idNumero = i;
        largoNumbero = 0;
      }
    } else {
      ++largoNumbero;
    }
  }
  numeros.push(operacion.substr(idNumero + 1, operacion.length - idNumero));

  let acum = 0;
  for (let i = 0; i < signo.length; i++) {
    if (signo[i] == "+") {
      acum == 0
        ? (acum = parseFloat(numeros[i]) + parseFloat(numeros[i + 1]))
        : (acum += parseFloat(numeros[i + 1]));
    }
    if (signo[i] == "-") {
      acum == 0
        ? (acum = parseFloat(numeros[i]) - parseFloat(numeros[i + 1]))
        : (acum -= parseFloat(numeros[i + 1]));
    }
    if (signo[i] == "*") {
      acum == 0
        ? (acum = parseFloat(numeros[i]) * parseFloat(numeros[i + 1]))
        : (acum *= parseFloat(numeros[i + 1]));
    }
    if (signo[i] == "/") {
      acum == 0
        ? (acum = parseFloat(numeros[i]) / parseFloat(numeros[i + 1]))
        : (acum /= parseFloat(numeros[i + 1]));
    }
  }
  resultado = acum;
  document.getElementById("input").value = resultado;
  resultado = 0;
};

let limpiar = () => {
  document.getElementById("input").value = "";
};
