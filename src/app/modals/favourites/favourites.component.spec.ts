import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Product } from '../../interfaces/product.interface';
import { favProducts } from '../../mocks/productsmock';
import { ProductsService } from '../../services/products/products.service';

import { FavouritesComponent } from './favourites.component';

describe('FavouritesComponent', () => {
  let component: FavouritesComponent;
  let fixture: ComponentFixture<FavouritesComponent>;

  let productsServiceSpy: any;
  let searcherServiceSpy: any;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async () => {
    productsServiceSpy = jasmine.createSpyObj('ProductsService', ['getFavProducts', 'toggleFav', 'uncheckGridProduct']);
    searcherServiceSpy = jasmine.createSpyObj('SearcherService', ['normalize']);

    productsServiceSpy.getFavProducts.and.returnValue(favProducts);
    searcherServiceSpy.normalize.and.returnValue('barniz');

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [FavouritesComponent],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: ProductsService, useValue: productsServiceSpy }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when init component', () => {
    it('should set favourites products array', () => {
      component.ngOnInit();
      expect(component.products.length).toEqual(2);
      expect(component.filteredProducts.length).toEqual(2);
    });
  });

  describe('when filter changes', () => {
    it('should filter products', () => {
      component.ngOnInit();
      component.filterChange({ value: 'bar' });
      expect(component.filteredProducts.length).toEqual(1);
    });
  });

  describe('when remove fav', () => {
    it('should delete one product', () => {
      component.ngOnInit();
      component.removeFav({
        id: 3,
        price: '10',
        title: 'Cable USB',
        email: 'mail1@mail.com'
      } as Product);
      expect(component.products.length).toEqual(1);
      expect(component.filteredProducts.length).toEqual(1);
      expect(productsServiceSpy.toggleFav).toHaveBeenCalled();
    });
  });

  describe('when close modal', () => {
    it('should navigate to fav outlet null', () => {
      component.close();
      expect(routerSpy.navigate).toHaveBeenCalled();
    });
  });
});
