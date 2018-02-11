import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LifeCyclePageComponent} from './comp-b.component';

describe('CompBComponent', () => {
  let component: LifeCyclePageComponent;
  let fixture: ComponentFixture<LifeCyclePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LifeCyclePageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCyclePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
