import { ProductsService } from './../../services/products/products.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortComponent } from './sort.component';
import { Subject } from 'rxjs';

describe('SortComponent', () => {
  let component: SortComponent;
  let fixture: ComponentFixture<SortComponent>;

  const productsServiceSpy = jasmine.createSpyObj('ProductsService', ['']);
  productsServiceSpy.reset = new Subject();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SortComponent],
      providers: [{ provide: ProductsService, useValue: productsServiceSpy }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
