import { Injectable } from "@angular/core";
import { RouterOutletComponent } from "./router-outlet/router-outlet.component";
import { Route } from "./route";

@Injectable()
export class RoutingContext {
  private readonly outlets: Map<number, RouterOutletComponent> = new Map<number, RouterOutletComponent>();

  public registerOutlet(level: number, outlet: RouterOutletComponent): () => void {
    this.outlets.set(level, outlet);
    return () => {
      this.outlets.delete(level);
    }
  }

  public activate(route: Array<Route>): void {
    let level = 0;
    if (this.outlets.has(level)) {
      this.outlets.get(level)!.activate(route[level].component);
    }
  }
}
