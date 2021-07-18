import { TestBed } from '@angular/core/testing';

import { IsPosibleService } from './is-posible.service';

describe('IsPosibleService', () => {
  let service: IsPosibleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsPosibleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
