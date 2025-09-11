import { salida, ingreso, tarifa } from "./parqueo.js";

const first = document.querySelector("#ingreso-numero");
const second = document.querySelector("#salida-numero");
const days = document.querySelector("#dias-numero");
const form = document.querySelector("#parqueo-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault(); 

  const horaIngreso = Number.parseInt(first.value);
  const horaSalida = Number.parseInt(second.value);
  const dias = Number.parseInt(days.value);
  const ticketPerdido = document.querySelector("#ticket-perdido").checked;

  let monto = tarifa(ticketPerdido, horaIngreso, horaSalida, dias);

  if(ticketPerdido){
    div.innerHTML = `<p>Ticket perdido → Total a pagar: <strong>${monto} Bs</strong></p>`;
    return;
  }

  div.innerHTML = `
    <p>Hora de ingreso: ${ingreso(horaIngreso)}:00</p>
    <p>Hora de salida: ${salida(horaSalida)}:00</p>
    <p>Días completos: ${dias}</p>
    <p>Total a pagar: <strong>${monto} Bs</strong></p>
  `;
});
