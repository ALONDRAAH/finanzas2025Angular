import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoIngresosComponent } from './listado-ingresos.component';

describe('ListadoIngresosComponent', () => {
  let component: ListadoIngresosComponent;
  let fixture: ComponentFixture<ListadoIngresosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoIngresosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoIngresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
