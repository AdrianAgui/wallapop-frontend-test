import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ProductsService } from './products.service';
import { Product } from '../../interfaces/product.interface';
import { first, of } from 'rxjs';

import { allProducts, favProducts } from '../../mocks/productsmock';

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
    service.favProducts = favProducts;
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

  describe('when get fav products', () => {
    it('should return 2 products', () => {
      service.favProducts = favProducts;
      expect(service.getFavProducts().length).toEqual(2);
    });
  });

  describe('when toggle product fav', () => {
    it('should push favourite and then remove it', (done) => {
      const favProdSelected = {
        id: 4,
        price: '50',
        title: 'Game Boy',
        email: 'mail4@mail.com'
      } as Product;

      service.favsChange.pipe(first()).subscribe((favsLengthPush) => {
        service.favsChange.pipe(first()).subscribe((favsLengthRemove) => {
          expect(favsLengthRemove).toEqual(2);
          done();
        });
        expect(favsLengthPush).toEqual(3);
        service.toggleFav(favProdSelected);
      });

      service.toggleFav(favProdSelected);
    });
  });
});
