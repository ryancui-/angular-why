import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SubCComponent} from './sub-c.component';

describe('SubCComponent', () => {
  let component: SubCComponent;
  let fixture: ComponentFixture<SubCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SubCComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
