import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogActividadCrudComponent } from './log-actividad-crud.component';

describe('LogActividadCrudComponent', () => {
  let component: LogActividadCrudComponent;
  let fixture: ComponentFixture<LogActividadCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogActividadCrudComponent]
    });
    fixture = TestBed.createComponent(LogActividadCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
