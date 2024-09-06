import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalistaCreditoCrudComponent } from './analista-credito-crud.component';

describe('AnalistaCreditoCrudComponent', () => {
  let component: AnalistaCreditoCrudComponent;
  let fixture: ComponentFixture<AnalistaCreditoCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnalistaCreditoCrudComponent]
    });
    fixture = TestBed.createComponent(AnalistaCreditoCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
