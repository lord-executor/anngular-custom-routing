import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlphaComponent } from './blocks/alpha/alpha.component';
import { BetaComponent } from './blocks/beta/beta.component';
import { RouterOutletComponent } from './router-outlet/router-outlet.component';
import { ROUTES_TOKEN, Router } from './router';
import { WrapOneComponent } from './blocks/wrap-one/wrap-one.component';
import { WrapTwoComponent } from './blocks/wrap-two/wrap-two.component';
import { RoutingContext } from './routing-context';
import { FormsModule } from '@angular/forms';

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
    BrowserModule,
    FormsModule,
  ],
  providers: [
    {
      provide: RoutingContext,
      useClass: RoutingContext
    },
    {
      provide: ROUTES_TOKEN,
      useValue: [
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
      ]
    },
    {
      provide: Router,
      useClass: Router
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
