import {NgModule} from '@angular/core';
import {LifeCyclePageComponent} from './life-cycle/life-cycle-page/life-cycle-page.component';

import {RouterModule, Routes} from '@angular/router';
import {IndexPageComponent} from './index-page/index-page.component';

const routes: Routes = [{
  path: '',
  component: IndexPageComponent
}, {
  path: 'life-cycle',
  component: LifeCyclePageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
