import {NgModule} from '@angular/core';
import {CompBComponent} from './comp-b/comp-b.component';

import {RouterModule, Routes} from '@angular/router';
import {IndexPageComponent} from './index-page/index-page.component';

const routes: Routes = [{
  path: '',
  component: IndexPageComponent
}, {
  path: 'life-time',
  component: CompBComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
