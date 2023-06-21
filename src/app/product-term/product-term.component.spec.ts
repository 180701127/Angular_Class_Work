import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTermComponent } from './product-term.component';

describe('ProductTermComponent', () => {
  let component: ProductTermComponent;
  let fixture: ComponentFixture<ProductTermComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTermComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
