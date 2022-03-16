import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Subject } from 'rxjs';
import { ProductsService } from '../../services/products/products.service';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  let productsServiceSpy: any;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async () => {
    productsServiceSpy = jasmine.createSpyObj('ProductsService', ['']);
    productsServiceSpy.favsProducts = new Subject();
    productsServiceSpy.reset = new Subject();

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [HeaderComponent],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: ProductsService, useValue: productsServiceSpy }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when init component', () => {
    it('should listen fav changes', () => {
      component.ngOnInit();
      productsServiceSpy.favsProducts.next([]);
      expect(component.activatedFavs).toBe(false);
    });
  });

  describe('when open modal', () => {
    it('should navigate to secondary outlet ', () => {
      component.openFavs();
      expect(routerSpy.navigate).toHaveBeenCalled();
    });
  });
});
