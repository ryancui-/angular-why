import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RouteReusePageComponent} from './route-reuse-page.component';

describe('RouteReusePageComponent', () => {
  let component: RouteReusePageComponent;
  let fixture: ComponentFixture<RouteReusePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RouteReusePageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteReusePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
