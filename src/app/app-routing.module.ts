import {NgModule} from '@angular/core';
import {LifeCyclePageComponent} from './life-cycle/life-cycle-page/life-cycle-page.component';

import {RouteReuseStrategy, RouterModule, Routes} from '@angular/router';
import {IndexPageComponent} from './index-page/index-page.component';
import {RouteReusePageComponent} from './route-reuse/route-reuse-page/route-reuse-page.component';
import {MyReuseStrategy} from './my-reuse-strategy';
import {Store} from './store';

const routes: Routes = [{
  path: '',
  component: IndexPageComponent
}, {
  path: 'life-cycle',
  component: LifeCyclePageComponent
}, {
  path: 'route-reuse',
  component: RouteReusePageComponent
}];

export function customReuseStrategyFactory(store: Store) {
  return new MyReuseStrategy(store);
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [{
    provide: RouteReuseStrategy,
    useFactory: customReuseStrategyFactory,
    deps: [Store]
  }],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
