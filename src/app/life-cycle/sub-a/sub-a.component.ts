import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit
} from '@angular/core';

@Component({
  selector: 'sub-a',
  templateUrl: './sub-a.component.html',
  styleUrls: ['./sub-a.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubAComponent implements OnInit, OnChanges,
  AfterViewInit, AfterViewChecked,
  AfterContentInit, AfterContentChecked, DoCheck {

  @Input() count;
  @Input() total;

  constructor() {
    console.log('A: constructor');
    // this.logInput();
  }

  ngOnInit() {
    console.log('A: ngOnInit');
    // this.logInput();
  }

  ngOnChanges() {
    console.log('A: ngOnChanges');
    // this.logInput();
  }

  ngAfterViewInit() {
    console.log('A: ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('A: ngAfterViewChecked');
  }

  ngAfterContentInit() {
    console.log('A: ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('A: ngAfterContentChecked');
  }

  ngDoCheck() {
    console.log('A: ngDoCheck');
  }

  logInput() {
    console.log('count is ', this.count);
    console.log('total is ', this.total);
  }
}
