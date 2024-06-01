import { TestBed } from '@angular/core/testing';

import { TrocarTemaService } from './trocar-tema.service';

describe('TrocarTemaService', () => {
  let service: TrocarTemaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrocarTemaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
