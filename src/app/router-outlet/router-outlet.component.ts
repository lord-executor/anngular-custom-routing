import { Component, ComponentRef, Inject, InjectionToken, Injector, OnDestroy, OnInit, Optional, Type, ViewContainerRef } from '@angular/core';
import { AlphaComponent } from '../blocks/alpha/alpha.component';
import { RoutingContext } from '../routing-context';

export const NESTING_TOKEN = new InjectionToken("NESTING_TOKEN");

let outletId = 1;

@Component({
  selector: 'app-router-outlet',
  template: '{{ id }}',
})
export class RouterOutletComponent implements OnInit, OnDestroy {
  public readonly id: number;
  private activatedInstane: ComponentRef<unknown> | null = null;
  private teardown: (() => void) | null = null;

  public constructor(
    @Optional()
    @Inject(NESTING_TOKEN)
    public readonly nestingIndex: number,
    public readonly injector: Injector,
    public readonly viewContainerRef: ViewContainerRef,
    public readonly routingContext: RoutingContext
  ) {
    this.id = outletId++;
    console.log('created outlet with id', this.id);
  }

  public ngOnInit(): void {
    this.teardown = this.routingContext.registerOutlet(this.nestingIndex ?? 0, this);
  }

  public ngOnDestroy():  void {
    this.teardown?.();
    this.teardown = null;
    this.activatedInstane?.destroy();
    this.activatedInstane = null;
  }

  public activate(componentType: Type<unknown>): void {
    this.activatedInstane?.destroy();
    this.activatedInstane = null;
    console.log('inserting instance into outlet', this.id, componentType);

    const instanceInjector = Injector.create({
      providers: [
        {
          provide: NESTING_TOKEN,
          useValue: this.nestingIndex + 1
        }
      ],
      parent: this.injector
    });

    this.activatedInstane = this.viewContainerRef.createComponent(componentType, {
      index: 0,
      injector: instanceInjector
    });
  }
}
