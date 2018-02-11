import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IndexPageComponent} from './index-page/index-page.component';
import {LifeCyclePageComponent} from './life-cycle/life-cycle-page/life-cycle-page.component';
import {SubAComponent} from './life-cycle/sub-a/sub-a.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    LifeCyclePageComponent,
    SubAComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
