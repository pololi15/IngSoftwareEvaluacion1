import sumar from "./sumador";
import { salida, ingreso, tarifa} from "./parqueo.js";

const first = document.querySelector("#ingreso-numero");
const second = document.querySelector("#salida-numero");
const form = document.querySelector("#parqueo-form");
const div = document.querySelector("#resultado-div");

/*
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});
*/
form.addEventListener("submit", (event) => {
  event.preventDefault(); 

  const horaIngreso = Number.parseInt(first.value);
  const horaSalida = Number.parseInt(second.value);
  const ticketPerdido = document.querySelector("#ticket-perdido").checked;

  if(ticketPerdido){
    div.innerHTML = "<p>La tarifa por ticket perdido es: " + tarifa(ticketPerdido) + "</p>";
    return;
  }

  div.innerHTML = "<p>Hora de ingreso: " + ingreso(horaIngreso) + " " + "Hora de salida: " + salida(horaSalida)+ "</p>";

});