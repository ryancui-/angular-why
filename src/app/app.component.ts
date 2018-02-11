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
    name: 'Component Life Cycle',
    url: '/life-cycle'
  }, {
    name: 'Route Reuse',
    url: '/route-reuse'
  }];
}
