import { Injectable } from "@angular/core";
import { RouterOutletComponent } from "./router-outlet/router-outlet.component";
import { Route } from "./route";

@Injectable()
export class RoutingContext {
  private readonly outlets: Map<number, RouterOutletComponent> = new Map<number, RouterOutletComponent>();

  private activeRoute: Array<Route> | null = null;
  private awaitingActivation: number = -1;

  public registerOutlet(level: number, outlet: RouterOutletComponent): () => void {
    this.outlets.set(level, outlet);

    if (this.awaitingActivation >= 0 && this.activeRoute) {
      this.outlets.get(this.awaitingActivation)!.activate(this.activeRoute[this.awaitingActivation].component);
      this.awaitingActivation++;
      if (this.awaitingActivation >= this.activeRoute.length) {
        this.awaitingActivation = -1;
        console.log('fully activated route', this.activeRoute);
      }
    }

    return () => {
      this.outlets.delete(level);
    }
  }

  public activate(route: Array<Route>): void {
    this.activeRoute = route;

    this.awaitingActivation = 0;
    while (this.awaitingActivation < this.activeRoute.length)
    {
      if (this.outlets.has(this.awaitingActivation)) {
        this.outlets.get(this.awaitingActivation)!.activate(this.activeRoute[this.awaitingActivation].component);
        this.awaitingActivation++;
      } else {
        break;
      }
    }
  }
}
