import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Igastos } from '../../../interfaces/igastos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado-gastos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado-gastos.component.html',
  styleUrl: './listado-gastos.component.css',
})
export class ListadoGastosComponent {
  @Input() gastos: Igastos[] = [];
  @Output() idEliminado = new EventEmitter<string>();

  @Output() gastoSeleccionado = new EventEmitter<Igastos>();

  eliminar(id: string) {
    this.idEliminado.emit(id);
    alert('ELIMINANDO GASTO...');
  }

  editar(gasto: Igastos) {
    this.gastoSeleccionado.emit(gasto);
  }
}
