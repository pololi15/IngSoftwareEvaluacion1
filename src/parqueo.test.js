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



});