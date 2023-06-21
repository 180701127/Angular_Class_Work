import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GALLARYComponent } from './gallary.component';

describe('GALLARYComponent', () => {
  let component: GALLARYComponent;
  let fixture: ComponentFixture<GALLARYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GALLARYComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GALLARYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
