import { Component, ComponentRef, Injector, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { AlphaComponent } from '../blocks/alpha/alpha.component';
import { BetaComponent } from '../blocks/beta/beta.component';

@Component({
  selector: 'app-router-outlet',
  template: '',
})
export class RouterOutletComponent implements OnInit, OnDestroy {
  private activatedInstane: ComponentRef<unknown> | null = null;

  public constructor(
    public readonly injector: Injector,
    public readonly viewContainerRef: ViewContainerRef
  ) { }

  public ngOnInit(): void {
    const instanceInjector = Injector.create({
      providers: [],
      parent: this.injector
    });

    this.activatedInstane = this.viewContainerRef.createComponent(AlphaComponent, {
      index: 0,
      injector: instanceInjector
    });
  }

  public ngOnDestroy():  void {
    this.activatedInstane?.destroy();
    this.activatedInstane = null;
  }
}
