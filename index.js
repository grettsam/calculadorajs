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

var valores = [];
var resultado = 0;
var numOperadores;

let suma = () => {
  let operacion = document.getElementById("input").value;

  if (operacion[operacion.length - 1] != "+") {
    let indicador = operacion.lastIndexOf("+");
    if (operacion.slice(indicador + 1) != "") {
      valores.push(operacion.slice(indicador + 1));
    }
    document.getElementById("input").value += "+";
  }
};

let restar = () => {
  let operacion = document.getElementById("input").value;

  if (operacion[operacion.length - 1] != "-") {
    let indicador = operacion.lastIndexOf("-");
    if (operacion.slice(indicador + 1) != "") {
      valores.push(operacion.slice(indicador + 1));
    }
    document.getElementById("input").value += "-";
  } 
}
let multiplicar = () => (document.getElementById("input").value += "*");
let dividir = () => (document.getElementById("input").value += "/");

let calcular = () => {
  let operacion = document.getElementById("input").value;

  if (operacion.includes("+")) {
    console.log('suma');
    if (operacion[operacion.length - 1] != "+") {
      let indicador = operacion.lastIndexOf("+");
      if (operacion.slice(indicador + 1) != "") {
        valores.push(operacion.slice(indicador + 1));
      }
    }
    for (const numero of valores) {
      resultado += parseInt(numero);
    }
  }

  if (operacion.includes("-")) {
    console.log('resta');
    if (operacion[operacion.length - 1] != "-") {
      let indicador = operacion.lastIndexOf("-");
      if (operacion.slice(indicador + 1) != "") {
        valores.push(operacion.slice(indicador + 1));
      }
    }
    console.log(valores);
    for (const numero of valores) {
      resultado -= parseInt(numero);
    }
  }






  document.getElementById("input").value = resultado;
  valores = [];
  resultado = 0;
};

let limpiar = () => {
  document.getElementById("input").value = "";
  valores = [];
};
