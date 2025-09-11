import parqueo from './parqueo';
import { ingreso } from './parqueo';
import { salida } from './parqueo';
import { tarifa } from './parqueo';

describe('Parqueo', () => {
 it("deberia registrar la hora de ingreso y mostrarla, devolverla ", () => {
    expect(ingreso(10)).toEqual(10);
  });

  it("deberia registrar la hora de ingreso y mostrarla, devolverla ", () => {
    expect(salida(15)).toEqual(15);
  });

  it("deberia cobrar tarifa de 80 si el ticket esta perdido", () => {
    expect(tarifa(true)).toEqual(80);
  });
  
  it("deberia cobrar 10 Bs por 1 hora", () => {
    expect(tarifa(false, 10, 11)).toEqual(10);
  });

  it("deberia cobrar 20 Bs por 2 horas", () => {
    expect(tarifa(false, 10, 12)).toEqual(20);
  });

  it("deberia cobrar tarifa nocturna si entra 23 y sale 1", () => {
    expect(tarifa(false, 23, 1)).toEqual(12); 
  });




});