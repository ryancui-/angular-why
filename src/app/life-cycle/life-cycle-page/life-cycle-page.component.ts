import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnInit
} from '@angular/core';

@Component({
  selector: 'life-cycle-page',
  templateUrl: './life-cycle-page.component.html',
  styleUrls: ['./life-cycle-page.component.scss']
})
export class LifeCyclePageComponent implements OnInit, OnChanges,
  AfterViewInit, AfterViewChecked,
  AfterContentInit, AfterContentChecked, DoCheck {

  toA: number;
  toB: object;

  constructor() {
    console.log('Page: constructor');
  }

  ngOnInit() {
    this.toA = 100;
    this.toB = {
      key: 'key', value: 'value'
    };
    console.log('Page: ngOnInit');
  }

  ngOnChanges() {
    console.log('Page: ngOnChanges');
  }

  ngAfterViewInit() {
    console.log('Page: ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('Page: ngAfterViewChecked');
  }

  ngAfterContentInit() {
    console.log('Page: ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('Page: ngAfterContentChecked');
  }

  ngDoCheck() {
    console.log('Page: ngDoCheck');
  }
}
