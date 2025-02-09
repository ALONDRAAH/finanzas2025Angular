import { Component, inject, signal } from '@angular/core';
import { FrmGastosComponent } from '../../componentes/gastos/frm-gastos/frm-gastos.component';
import { Igastos } from '../../interfaces/igastos';
import { ListadoGastosComponent } from '../../componentes/gastos/listado-gastos/listado-gastos.component';
import { DbService } from '../../servicios/db.service';

@Component({
  selector: 'app-gastos',
  standalone: true,
  imports: [FrmGastosComponent, ListadoGastosComponent],
  templateUrl: './gastos.component.html',
  styleUrl: './gastos.component.css',
})
export class GastosComponent {
  gastos = signal<Igastos[]>([]);
  gastoParaEditar = signal<Igastos | null>(null);

  gastoServicio = inject(DbService);

  agregarGasto(gasto: Igastos) {
    this.gastoServicio.agregarGasto({ ...gasto });
    this.gastos.set(this.gastoServicio.getGastos());
  }

  editandolo(gastoEditado: Igastos) {
    this.gastoServicio.actualizarGasto(gastoEditado);
    this.gastos.set(this.gastoServicio.getGastos());
  }

  eliminaGasto(id: string) {
    this.gastoServicio.eliminarGasto(id);
    this.gastos.set(this.gastoServicio.getGastos());
  }

  seleccionGasto(gasto: Igastos) {
    this.gastoParaEditar.set(gasto);
  }
}
