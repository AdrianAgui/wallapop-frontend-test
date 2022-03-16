import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, Subject } from 'rxjs';
import { allProducts, products } from '../../mocks/products.mock';
import { ProductsService } from '../../services/products/products.service';
import { SearcherService } from '../../services/searcher/searcher.service';
import { SortsService } from '../../services/sorts/sorts.service';

import { GridComponent } from './grid.component';

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;

  let productsServiceSpy: any;
  let sortsServiceSpy: any;
  let searcherServiceSpy: any;

  beforeEach(async () => {
    productsServiceSpy = jasmine.createSpyObj('ProductsService', ['getProducts', 'getAllProducts']);
    sortsServiceSpy = jasmine.createSpyObj('SortsService', ['sortProducts']);
    searcherServiceSpy = jasmine.createSpyObj('SearcherService', ['normalize']);

    productsServiceSpy.getProducts.and.returnValue(of(products));
    productsServiceSpy.getAllProducts.and.returnValue(allProducts);
    sortsServiceSpy.sortProducts.and.returnValue(products);

    productsServiceSpy.favsProducts = new Subject();
    productsServiceSpy.reset = new Subject();
    searcherServiceSpy.onSearchChange = new Subject();

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [GridComponent],
      providers: [
        { provide: ProductsService, useValue: productsServiceSpy },
        { provide: SortsService, useValue: sortsServiceSpy },
        { provide: SearcherService, useValue: searcherServiceSpy }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when init component', () => {
    it('should get products', () => {
      component.ngOnInit();
      expect(component.showableTotalProducts).toEqual(3);
      expect(component.products.length).toEqual(1);
    });
  });

  describe('when search something', () => {
    it('should get results if text has equal or more than 2 chars', () => {
      component.ngOnInit();
      searcherServiceSpy.onSearchChange.next('search text');
      expect(component.showableTotalProducts).toEqual(3);
      expect(component.products.length).toEqual(1);
    });

    it('should get results if text has equal or more than 2 chars', () => {
      component.ngOnInit();
      searcherServiceSpy.onSearchChange.next('a');
      expect(component.showableTotalProducts).toEqual(3);
      expect(component.products.length).toEqual(3);
    });
  });
});
