import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlphaComponent } from './blocks/alpha/alpha.component';
import { BetaComponent } from './blocks/beta/beta.component';
import { RouterOutletComponent } from './router-outlet/router-outlet.component';
import { Router } from './router';
import { WrapOneComponent } from './blocks/wrap-one/wrap-one.component';
import { WrapTwoComponent } from './blocks/wrap-two/wrap-two.component';

@NgModule({
  declarations: [
    AppComponent,
    AlphaComponent,
    BetaComponent,
    RouterOutletComponent,
    WrapOneComponent,
    WrapTwoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: Router,
      useValue: new Router([
        {
          segment: "first",
          component: WrapOneComponent,
          children: [
            {
              segment: "alpha",
              component: AlphaComponent,
              children: []
            },
            {
              segment: "beta",
              component: BetaComponent,
              children: []
            }
          ]
        },
        {
          segment: "second",
          component: WrapTwoComponent,
          children: [
            {
              segment: "foo",
              component: AlphaComponent,
              children: []
            },
            {
              segment: "bar",
              component: BetaComponent,
              children: []
            }
          ]
        }
      ])
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
