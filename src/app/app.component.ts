import { Component, OnInit } from '@angular/core';
import { Router } from './router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public title: string = 'Custom Routing';

  public readonly links = [
    'first/alpha',
    'first/beta',
    'second/foo',
    'second/bar',
  ];

  public constructor(
    private readonly router: Router
  ) {
  }

  public navigate(event: Event | null, path: string): void {
    event?.preventDefault();
    event?.stopPropagation();
    console.log('triggering navigation to: ', path);
    this.router.navigateTo(path);
  }

  public ngOnInit(): void {
    this.navigate(null, 'first/alpha');
  }
}
