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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges,
  AfterViewInit, AfterViewChecked,
  AfterContentInit, AfterContentChecked, DoCheck {

  title = 'app';
  aText = 'aText-1';

  ngOnInit() {
    console.log('[ngOnInit]:App');
  }

  ngOnChanges() {
    console.log('[ngOnChanges]:App');
  }

  ngAfterViewInit() {
    console.log('[ngAfterViewInit]:App');
  }

  ngAfterViewChecked() {
    console.log('[ngAfterViewChecked]:App');
  }

  ngAfterContentInit() {
    console.log('[ngAfterContentInit]:App');
  }

  ngAfterContentChecked() {
    console.log('[ngAfterContentChecked]:App');
  }

  ngDoCheck() {
    console.log('[ngDoCheck]:App');
  }

  changeAText() {
    this.aText = 'aText-change';
  }
}
