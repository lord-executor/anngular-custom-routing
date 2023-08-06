import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlphaComponent } from './blocks/alpha/alpha.component';
import { BetaComponent } from './blocks/beta/beta.component';
import { RouterOutletComponent } from './router-outlet/router-outlet.component';

@NgModule({
  declarations: [
    AppComponent,
    AlphaComponent,
    BetaComponent,
    RouterOutletComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
