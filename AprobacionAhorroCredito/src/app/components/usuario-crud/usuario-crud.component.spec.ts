import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioCrudComponent } from './usuario-crud.component';

describe('UsuarioCrudComponent', () => {
  let component: UsuarioCrudComponent;
  let fixture: ComponentFixture<UsuarioCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioCrudComponent]
    });
    fixture = TestBed.createComponent(UsuarioCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
