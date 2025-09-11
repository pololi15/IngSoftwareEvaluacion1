function ingreso(hora) {
  console.log("Hora de ingreso:", hora);
  return hora;
}

function salida(hora) {
  console.log("Hora de salida:", hora);
  return hora;
}

function calcularHoras(horaIngreso, horaSalida, dias = 0) {
  let horas = horaSalida - horaIngreso;
  if (horas <= 0) {
    horas += 24; // pasó medianoche
  }
  return (dias * 24) + Math.ceil(horas); // total en horas
}

function esNocturno(horaIngreso, horaSalida) {
  // muy simplificado: si todo el rango está dentro de 22–6
  return (
    (horaIngreso >= 22 || horaIngreso < 6) &&
    (horaSalida > horaIngreso || horaSalida <= 6)
  );
}

function tarifa(ticketPerdido, horaIngreso, horaSalida, dias = 0) {
  if (ticketPerdido) {
    console.log("Penalidad por pérdida de ticket: 80 Bs");
    return 80;
  }

  let horas = calcularHoras(horaIngreso, horaSalida, dias);

  let costo;
  if (esNocturno(horaIngreso, horaSalida)) {
    costo = horas * 6;
    console.log("Tarifa nocturna aplicada:", costo, "Bs");
  } else {
    costo = horas * 10;
    console.log("Tarifa base aplicada:", costo, "Bs");
  }

  let diasTotales = dias + 1; // siempre al menos 1 día
  let maximo = diasTotales * 50;

  if (costo > maximo) {
    console.log("Tope máximo aplicado:", maximo, "Bs");
    return maximo;
  }

  return costo;
}

export { ingreso, salida, tarifa };
