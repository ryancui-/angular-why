import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css']
})
export class CompBComponent implements OnInit, OnChanges,
  AfterViewInit, AfterViewChecked,
  AfterContentInit, AfterContentChecked, DoCheck {

  @Input() text: string;

  _twbind;
  @Output() twbindChange = new EventEmitter();


  get twbind() {
    console.log('CompB.twbind getter');
    return this._twbind;
  }

  @Input()
  set twbind(v) {
    console.log('CompB.twbind setter');
    this._twbind = v;
    this.twbindChange.emit(v);
  }

  constructor() {
  }

  ngOnInit() {
    console.log('[ngOnInit]:CompB');
  }

  ngOnChanges() {
    console.log('[ngOnChanges]:CompB');
  }

  ngAfterViewInit() {
    console.log('[ngAfterViewInit]:CompB');
  }

  ngAfterViewChecked() {
    console.log('[ngAfterViewChecked]:CompB');
  }

  ngAfterContentInit() {
    console.log('[ngAfterContentInit]:CompB');
  }

  ngAfterContentChecked() {
    console.log('[ngAfterContentChecked]:CompB');
  }

  ngDoCheck() {
    console.log('[ngDoCheck]:CompB');
  }
}
