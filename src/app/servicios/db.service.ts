import { Injectable, signal } from '@angular/core';
import { Iingresos } from '../interfaces/iingresos';
import { Igastos } from '../interfaces/igastos';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  private static ingresos = signal<Iingresos[]>([]);
  private static gastos = signal<Igastos[]>([]);

  constructor() {}

  // Métodos para Ingresos
  getIngresos(): Iingresos[] {
    return DbService.ingresos();
  }

  agregarIngreso(ingreso: Iingresos) {
    const id = DbService.ingresos().length
      ? (Math.max(...DbService.ingresos().map((i) => parseInt(i.id))) + 1).toString()
      : '1';
    const aux = { ...ingreso, id };
    const aux2 = [...DbService.ingresos(), aux];
    DbService.ingresos.set(aux2);
  }

  eliminarIngreso(id: string) {
    const aux = DbService.ingresos().filter((i) => i.id !== id);
    DbService.ingresos.set(aux);
  }

  actualizarIngreso(ingreso: Iingresos) {
    const aux = DbService.ingresos().map((ing) => (ing.id == ingreso.id ? ingreso : ing));
    DbService.ingresos.set(aux);
  }

  // Métodos para Gastos
  getGastos(): Igastos[] {
    return DbService.gastos();
  }

  agregarGasto(gasto: Igastos) {
    const id = DbService.gastos().length
      ? (Math.max(...DbService.gastos().map((g) => parseInt(g.id))) + 1).toString()
      : '1';
    const aux = { ...gasto, id };
    const aux2 = [...DbService.gastos(), aux];
    DbService.gastos.set(aux2);
  }

  eliminarGasto(id: string) {
    const aux = DbService.gastos().filter((g) => g.id !== id);
    DbService.gastos.set(aux);
  }

  actualizarGasto(gasto: Igastos) {
    const aux = DbService.gastos().map((g) => (g.id == gasto.id ? gasto : g));
    DbService.gastos.set(aux);
  }
}
