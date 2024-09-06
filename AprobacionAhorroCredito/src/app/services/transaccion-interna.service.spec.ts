import { TestBed } from '@angular/core/testing';

import { TransaccionInternaService } from './transaccion-interna.service';

describe('TransaccionInternaService', () => {
  let service: TransaccionInternaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransaccionInternaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
