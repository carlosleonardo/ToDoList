import { TestBed } from '@angular/core/testing';

import { BDNaMemoriaService } from './bdna-memoria.service';

describe('BDNaMemoriaService', () => {
  let service: BDNaMemoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BDNaMemoriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
