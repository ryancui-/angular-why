import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menus = [{
    name: 'Index',
    url: '/'
  }, {
    name: 'Components Life Time',
    url: '/life-time'
  }];
}
