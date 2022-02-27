import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ProductsService } from './products.service';
import { Product } from '../../interfaces/product.interface';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

const allProducts = [
  {
    id: 2,
    price: '30',
    title: 'Barniz'
  },
  {
    id: 3,
    price: '10',
    title: 'Cable USB'
  },
  {
    id: 1,
    price: '20',
    title: 'Alicates'
  }
] as Product[];

const favProducts = [
  {
    id: 2,
    price: '30',
    title: 'Barniz'
  },
  {
    id: 3,
    price: '10',
    title: 'Cable USB'
  }
] as Product[];

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
      expect(service.getAllProducts().length).toEqual(3);
    });
  });

  describe('when get fav products', () => {
    it('should return 2 products', () => {
      expect(service.getFavProducts().length).toEqual(2);
    });
  });

  describe('when toggle product fav', () => {
    it('should push favourite', () => {
      service.favsChange.subscribe((favsLength) => expect(favsLength).toEqual(3));
      service.toggleFav({
        id: 4,
        price: '50',
        title: 'Game Boy'
      } as Product);
    });
    it('should remove favourite', () => {
      service.favsChange.subscribe((favsLength) => expect(favsLength).toEqual(2));
      service.toggleFav({
        id: 4,
        price: '50',
        title: 'Game Boy'
      } as Product);
    });
  });
});
