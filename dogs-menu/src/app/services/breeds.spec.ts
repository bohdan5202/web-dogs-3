import { TestBed } from '@angular/core/testing';
import { Breeds } from './breeds';

describe('Breeds', () => {
  let service: Breeds;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Breeds);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
