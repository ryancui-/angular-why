import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
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

  local;
  local2;

  @Input() observaeble;

  constructor(private changeDetector: ChangeDetectorRef) {
    console.log('A: constructor');
  }

  ngOnInit() {
    console.log('A: ngOnInit');
    this.observaeble.subscribe(value => {
      this.local2 = value;
      // this.changeDetector.markForCheck();
    });
  }

  change() {
    this.local = Math.random();
  }

  ngOnChanges() {
    console.log('A: ngOnChanges');
  }

  ngAfterViewInit() {
    // console.log('A: ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('A: ngAfterViewChecked');
  }

  ngAfterContentInit() {
    // console.log('A: ngAfterContentInit');
  }

  ngAfterContentChecked() {
    // console.log('A: ngAfterContentChecked');
  }

  ngDoCheck() {
    console.log('A: ngDoCheck');
  }
}
