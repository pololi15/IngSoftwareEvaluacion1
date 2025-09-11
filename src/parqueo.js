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

  if (esNocturno(horaIngreso, horaSalida)) {
    return horas * 6;
  }

  return horas * 10;
}



export { ingreso, salida, tarifa, esNocturno, calcularHoras };