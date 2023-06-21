import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacttoolsComponent } from './contacttools.component';

describe('ContacttoolsComponent', () => {
  let component: ContacttoolsComponent;
  let fixture: ComponentFixture<ContacttoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContacttoolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContacttoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
