import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentoCrudComponent } from './documento-crud.component';

describe('DocumentoCrudComponent', () => {
  let component: DocumentoCrudComponent;
  let fixture: ComponentFixture<DocumentoCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentoCrudComponent]
    });
    fixture = TestBed.createComponent(DocumentoCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
