import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Iingresos } from '../../../interfaces/iingresos';
import { CommonModule } from '@angular/common';
import { DbService } from '../../../servicios/db.service';

@Component({
  selector: 'app-listado-ingresos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado-ingresos.component.html',
  styleUrl: './listado-ingresos.component.css',
})
export class ListadoIngresosComponent {
  @Input() ingresos: Iingresos[] = [];
  @Output() idEliminado = new EventEmitter<string>();

  @Output() ingresoSeleccionado = new EventEmitter<Iingresos>();

  servicio = inject(DbService);

  eliminar(id: string) {
    this.idEliminado.emit(id);
    alert('ELIMINANDO REGISTRO.....');
  }
  editar(ing: Iingresos) {
    this.ingresoSeleccionado.emit(ing);
  }
}
