import { TestBed } from '@angular/core/testing';

import { HistorialCrediticioService } from './historial-crediticio.service';

describe('HistorialCrediticioService', () => {
  let service: HistorialCrediticioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistorialCrediticioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
