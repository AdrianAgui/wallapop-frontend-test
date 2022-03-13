import { TestBed } from '@angular/core/testing';

import { InitResolver } from './init.resolver';

describe('InitResolver', () => {
  let resolver: InitResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(InitResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
