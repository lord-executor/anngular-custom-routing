import { RouterOutletComponent } from "./router-outlet/router-outlet.component";

export class RoutingContext {
  private readonly outlets: Map<number, RouterOutletComponent> = new Map<number, RouterOutletComponent>();

  public registerOutlet(level: number, outlet: RouterOutletComponent) {
    this.outlets.set(level, outlet);
  }
}
