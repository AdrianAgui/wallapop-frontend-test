import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ProductsService } from './products.service';

import { allProducts } from '../../mocks/products.mock';

describe('ProductsService', () => {
  let service: ProductsService;

  const httpSpy = jasmine.createSpyObj('HttpClient', ['get']);

  beforeEach(() => {
    httpSpy.get.and.returnValue(of({ items: allProducts }));

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: HttpClient, useValue: httpSpy }]
    });

    service = TestBed.inject(ProductsService);

    service.allProducts = allProducts;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('when get products', () => {
    it('should return 1 product from cache', () => {
      service.getProducts(0, 1).subscribe((data) => {
        expect(data.length).toEqual(1);
      });
    });

    it('should return 2 product from http get', () => {
      service.allProducts = [];
      service.getProducts().subscribe((data) => {
        expect(data.length).toEqual(3);
      });
    });
  });

  describe('when get all products', () => {
    it('should return 3 products', () => {
      service.allProducts = allProducts;
      expect(service.getAllProducts().length).toEqual(3);
    });
  });
});
