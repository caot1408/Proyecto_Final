import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialCrediticioCrudComponent } from './historial-crediticio-crud.component';

describe('HistorialCrediticioCrudComponent', () => {
  let component: HistorialCrediticioCrudComponent;
  let fixture: ComponentFixture<HistorialCrediticioCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistorialCrediticioCrudComponent]
    });
    fixture = TestBed.createComponent(HistorialCrediticioCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
