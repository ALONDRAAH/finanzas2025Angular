import { Component, inject, signal } from '@angular/core';
import { FrmIngresosComponent } from '../../componentes/ingresos/frm-ingresos/frm-ingresos.component';
import { Iingresos } from '../../interfaces/iingresos';
import { ListadoIngresosComponent } from '../../componentes/ingresos/listado-ingresos/listado-ingresos.component';
import { DbService } from '../../servicios/db.service';

@Component({
  selector: 'app-ingresos',
  standalone: true,
  imports: [FrmIngresosComponent, ListadoIngresosComponent],
  templateUrl: './ingresos.component.html',
  styleUrl: './ingresos.component.css',
})
export class IngresosComponent {
  ingresos = signal<Iingresos[]>([]);
  ingresoParaEditar = signal<Iingresos | null>(null);

  ingresoServicio = inject(DbService);

  agregarIngreso(ingreso: Iingresos) {
    this.ingresoServicio.agregarIngreso({ ...ingreso });
    this.ingresos.set(this.ingresoServicio.getIngresos());
  }
  editandolo(ingresoEditado: Iingresos) {
    this.ingresoServicio.actualizarIngreso(ingresoEditado);
    this.ingresos.set(this.ingresoServicio.getIngresos());
  }
  eliminaIngreso(id: string) {
    this.ingresoServicio.eliminarIngreso(id);
    this.ingresos.set(this.ingresoServicio.getIngresos());
  }
  seleccionIngreso(ingreso: Iingresos) {
    this.ingresoParaEditar.set(ingreso);
  }
}
