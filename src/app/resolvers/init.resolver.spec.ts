import { ProductsService } from './../services/products/products.service';
import { TestBed } from '@angular/core/testing';

import { InitResolver } from './init.resolver';

describe('InitResolver', () => {
  let resolver: InitResolver;

  const productsServiceSpy = jasmine.createSpyObj('ProductsService', ['getProducts']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: ProductsService, useValue: productsServiceSpy }]
    });
    resolver = TestBed.inject(InitResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
