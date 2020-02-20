import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicsAssignmentTwoComponent } from './basics-assignment-two.component';

describe('BasicsAssignmentTwoComponent', () => {
  let component: BasicsAssignmentTwoComponent;
  let fixture: ComponentFixture<BasicsAssignmentTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicsAssignmentTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicsAssignmentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
