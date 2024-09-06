import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaccionInternaCrudComponent } from './transaccion-interna-crud.component';

describe('TransaccionInternaCrudComponent', () => {
  let component: TransaccionInternaCrudComponent;
  let fixture: ComponentFixture<TransaccionInternaCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransaccionInternaCrudComponent]
    });
    fixture = TestBed.createComponent(TransaccionInternaCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
