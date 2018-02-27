import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IndexPageComponent} from './index-page/index-page.component';
import {LifeCyclePageComponent} from './life-cycle/life-cycle-page/life-cycle-page.component';
import {SubAComponent} from './life-cycle/sub-a/sub-a.component';
import {SubBComponent} from './life-cycle/sub-b/sub-b.component';
import {SubCComponent} from './life-cycle/sub-c/sub-c.component';
import {RouteReusePageComponent} from './route-reuse/route-reuse-page/route-reuse-page.component';
import {Store} from './store';
import {SubA1Component} from './life-cycle/sub-a1/sub-a1.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    LifeCyclePageComponent,
    SubAComponent,
    SubBComponent,
    SubCComponent,
    RouteReusePageComponent,
    SubA1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule {
}
