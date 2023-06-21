import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngcourseComponent } from './angcourse.component';

describe('AngcourseComponent', () => {
  let component: AngcourseComponent;
  let fixture: ComponentFixture<AngcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngcourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
