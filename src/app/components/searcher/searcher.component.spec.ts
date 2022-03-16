import { ProductsService } from './../../services/products/products.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearcherComponent } from './searcher.component';
import { Subject } from 'rxjs';

describe('SearcherComponent', () => {
  let component: SearcherComponent;
  let fixture: ComponentFixture<SearcherComponent>;

  const productsServiceSpy = jasmine.createSpyObj('ProductsService', ['getProducts', 'getAllProducts']);
  productsServiceSpy.reset = new Subject();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearcherComponent],
      providers: [{ provide: ProductsService, useValue: productsServiceSpy }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when search', () => {
    it('should input search have not content', () => {
      component.filterChange();
      expect(component.inputHasText).toBe(false);
    });
  });
});
