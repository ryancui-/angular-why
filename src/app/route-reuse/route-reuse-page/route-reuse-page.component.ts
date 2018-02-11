import {Component, OnInit} from '@angular/core';
import {Store} from '../../store';

@Component({
  selector: 'route-reuse-page',
  templateUrl: './route-reuse-page.component.html',
  styleUrls: ['./route-reuse-page.component.scss']
})
export class RouteReusePageComponent implements OnInit {

  constructor(public store: Store) {
  }

  ngOnInit() {
  }

}
