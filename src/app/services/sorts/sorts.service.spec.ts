import { TestBed } from '@angular/core/testing';
import { Product } from 'src/app/interfaces/product.interface';

import { SortsService } from './sorts.service';

const productsMock = [
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

describe('SortsService', () => {
  let service: SortsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('SortsService', () => {
    describe('when sort list of products by text', () => {
      it('should sort alphabetically', () => {
        const sortType = 'title';
        const sortedProducts = service.sortProducts(productsMock, sortType);
        expect(sortedProducts[0].title).toBe('Alicates');
      });
    });

    describe('when sort list of products by price', () => {
      it('should sort from lower price to higher', () => {
        const sortType = 'price';
        const sortedProducts = service.sortProducts(productsMock, sortType);
        expect(sortedProducts[0].title).toBe('Cable USB');
      });
    });
  });
});
