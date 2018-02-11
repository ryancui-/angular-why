import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SubAComponent} from './sub-a.component';

describe('SubAComponent', () => {
  let component: SubAComponent;
  let fixture: ComponentFixture<SubAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SubAComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
