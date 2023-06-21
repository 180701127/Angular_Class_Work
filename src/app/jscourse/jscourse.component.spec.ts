import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JscourseComponent } from './jscourse.component';

describe('JscourseComponent', () => {
  let component: JscourseComponent;
  let fixture: ComponentFixture<JscourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JscourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JscourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
