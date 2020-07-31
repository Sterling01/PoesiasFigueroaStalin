import { TestBed } from '@angular/core/testing';

import { PoesiasService } from './poesias.service';

describe('PoesiasService', () => {
  let service: PoesiasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoesiasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
