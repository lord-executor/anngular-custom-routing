import { Component } from '@angular/core';
import { Router } from './router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public title: string = 'Custom Routing';
  public path: string = 'first/alpha';

  public constructor(
    private readonly router: Router
  ) {
  }

  public navigate(): void {
    console.log('triggering navigation to: ', this.path);
    this.router.navigateTo(this.path);
  }
}
