function ingreso(hora){
    return hora;
}

function salida(hora){ 
    return hora;
}

function esNocturno(horaIngreso, horaSalida) {
  return (horaIngreso >= 22 || horaIngreso < 6) && (horaSalida > horaIngreso || horaSalida <= 6);
}

function calcularHoras(horaIngreso, horaSalida) {
    let horas = horaSalida - horaIngreso;
    if (horas <= 0) {
        horas += 24;
    }
  return Math.ceil(horas); 
}

function tarifa(ticketPerdido, horaIngreso, horaSalida) {
  if (ticketPerdido) return 80;

  let horas = calcularHoras(horaIngreso, horaSalida);
  let costo;

  if (esNocturno(horaIngreso, horaSalida)) {
    costo = horas * 6;
  } else {
    costo = horas * 10;
  }

  return Math.min(costo, 50);
}




export { ingreso, salida, tarifa, esNocturno, calcularHoras };