import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarEntrenamientoDialogComponent } from './registrar-entrenamiento-dialog.component';

describe('RegistrarEntrenamientoDialogComponent', () => {
  let component: RegistrarEntrenamientoDialogComponent;
  let fixture: ComponentFixture<RegistrarEntrenamientoDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarEntrenamientoDialogComponent]
    });
    fixture = TestBed.createComponent(RegistrarEntrenamientoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
