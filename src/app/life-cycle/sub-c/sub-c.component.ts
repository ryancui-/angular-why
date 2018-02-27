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
  selector: 'sub-c',
  templateUrl: './sub-c.component.html',
  styleUrls: ['./sub-c.component.scss']
})
export class SubCComponent implements OnInit, OnChanges,
  AfterViewInit, AfterViewChecked,
  AfterContentInit, AfterContentChecked, DoCheck {

  constructor() {
    console.log('C: constructor');
  }

  ngOnInit() {
    // console.log('C: ngOnInit');
  }

  ngOnChanges() {
    console.log('C: ngOnChanges');
  }

  ngAfterViewInit() {
    // console.log('C: ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('C: ngAfterViewChecked');
  }

  ngAfterContentInit() {
    // console.log('C: ngAfterContentInit');
  }

  ngAfterContentChecked() {
    // console.log('C: ngAfterContentChecked');
  }

  ngDoCheck() {
    console.log('C: ngDoCheck');
  }

}
