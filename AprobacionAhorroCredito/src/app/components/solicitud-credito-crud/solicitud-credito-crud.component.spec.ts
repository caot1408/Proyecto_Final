import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudCreditoCrudComponent } from './solicitud-credito-crud.component';

describe('SolicitudCreditoCrudComponent', () => {
  let component: SolicitudCreditoCrudComponent;
  let fixture: ComponentFixture<SolicitudCreditoCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolicitudCreditoCrudComponent]
    });
    fixture = TestBed.createComponent(SolicitudCreditoCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
