function ingreso(hora){
    return hora;
}

function salida(hora){ 
    return hora;
}

function tarifa(ticketPerdido){
    if(ticketPerdido){
        return 80;
    }
}

export { ingreso, salida, tarifa };