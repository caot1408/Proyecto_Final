import { TestBed } from '@angular/core/testing';

import { LogActividadService } from './log-actividad.service';

describe('LogActividadService', () => {
  let service: LogActividadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogActividadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
