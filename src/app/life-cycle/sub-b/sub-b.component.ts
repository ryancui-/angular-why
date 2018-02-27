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
  selector: 'sub-b',
  templateUrl: './sub-b.component.html',
  styleUrls: ['./sub-b.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubBComponent implements OnInit, OnChanges,
  AfterViewInit, AfterViewChecked,
  AfterContentInit, AfterContentChecked, DoCheck {

  _value;
  @Input() obj;

  constructor(private changeDetector: ChangeDetectorRef) {
    console.log('B: constructor');
  }

  ngOnInit() {
    // console.log('B: ngOnInit');
  }

  ngOnChanges() {
    this._value = this.obj.value;
    console.log('B: ngOnChanges');
  }

  ngAfterViewInit() {
    // console.log('B: ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('B: ngAfterViewChecked');
  }

  ngAfterContentInit() {
    // console.log('B: ngAfterContentInit');
  }

  ngAfterContentChecked() {
    // console.log('B: ngAfterContentChecked');
  }

  ngDoCheck() {
    if (this._value !== this.obj.value) {
      this._value = this.obj.value;
      this.changeDetector.markForCheck();
    }
    console.log('B: ngDoCheck');
  }

}
