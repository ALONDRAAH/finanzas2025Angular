import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Iingresos } from '../../../interfaces/iingresos';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-frm-ingresos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './frm-ingresos.component.html',
  styleUrl: './frm-ingresos.component.css',
})
export class FrmIngresosComponent {
  @Input() ingresoParaEditar: Iingresos | null = null;

  @Output() ingresoAgregado = new EventEmitter<Iingresos>();
  @Output() editame = new EventEmitter<Iingresos>();

  ingresos: Iingresos[] = [];

  nuevoingreso: Iingresos = { id: '', nombre: '', fecha: '', monto: 0 };

  ngOnChanges() {
    if (this.ingresoParaEditar) {
      this.nuevoingreso = { ...this.ingresoParaEditar };
    }
  }

  agregaIngreso() {
    if (this.nuevoingreso.id == '') {
      this.ingresoAgregado.emit({ ...this.nuevoingreso });
      alert('INGRESO AGREGADO');
    } else {
      this.editame.emit({ ...this.nuevoingreso });
      this.ingresoParaEditar = null;
    }
    this.limpiar();
  }

  limpiar() {
    this.nuevoingreso.id = '';
    this.nuevoingreso.nombre = '';
    this.nuevoingreso.fecha = '';
    this.nuevoingreso.monto = 0;
  }
  editar(id: string): void {
    const aux = this.ingresos.find((item) => item.id == id);
    if (aux) {
      this.nuevoingreso = { ...aux };
    }
  }
  eliminar(id: string) {
    this.ingresos = this.ingresos.filter((item) => item.id !== id);
  }
}
