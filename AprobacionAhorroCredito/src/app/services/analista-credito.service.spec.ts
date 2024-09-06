import { TestBed } from '@angular/core/testing';

import { AnalistaCreditoService } from './analista-credito.service';

describe('AnalistaCreditoService', () => {
  let service: AnalistaCreditoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnalistaCreditoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
