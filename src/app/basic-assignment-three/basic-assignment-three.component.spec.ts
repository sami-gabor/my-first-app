import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAssignmentThreeComponent } from './basic-assignment-three.component';

describe('BasicAssignmentThreeComponent', () => {
  let component: BasicAssignmentThreeComponent;
  let fixture: ComponentFixture<BasicAssignmentThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicAssignmentThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicAssignmentThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
