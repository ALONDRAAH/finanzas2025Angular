import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Igastos } from '../../../interfaces/igastos';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-frm-gastos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './frm-gastos.component.html',
  styleUrl: './frm-gastos.component.css',
})
export class FrmGastosComponent {
  @Input() gastoParaEditar: Igastos | null = null;

  @Output() gastoAgregado = new EventEmitter<Igastos>();
  @Output() editame = new EventEmitter<Igastos>();

  nuevogasto: Igastos = { id: '', ingresoId: '', descripcion: '', monto: 0, fecha: '' };

  ngOnChanges() {
    if (this.gastoParaEditar) {
      this.nuevogasto = { ...this.gastoParaEditar };
    }
  }

  agregaGasto() {
    if (this.nuevogasto.id == '') {
      this.gastoAgregado.emit({ ...this.nuevogasto });
      alert('GASTO AGREGADO');
    } else {
      this.editame.emit({ ...this.nuevogasto });
      this.gastoParaEditar = null;
    }
    this.limpiar();
  }

  limpiar() {
    this.nuevogasto.id = '';
    this.nuevogasto.descripcion = '';
    this.nuevogasto.fecha = '';
    this.nuevogasto.monto = 0;
    this.nuevogasto.ingresoId = '';
  }
}
