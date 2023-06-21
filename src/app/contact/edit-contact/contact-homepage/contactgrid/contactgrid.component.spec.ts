import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactgridComponent } from './contactgrid.component';

describe('ContactgridComponent', () => {
  let component: ContactgridComponent;
  let fixture: ComponentFixture<ContactgridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactgridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
