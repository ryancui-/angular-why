import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SubBComponent} from './sub-b.component';

describe('SubBComponent', () => {
  let component: SubBComponent;
  let fixture: ComponentFixture<SubBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SubBComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
