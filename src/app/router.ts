import { Inject, Injectable, InjectionToken } from "@angular/core";
import { Route } from "./route";
import { RoutingContext } from "./routing-context";

export const ROUTES_TOKEN = new InjectionToken("ROUTES_TOKEN");

@Injectable()
export class Router {
  public constructor(
    @Inject(ROUTES_TOKEN)
    private readonly routes: Array<Route>,
    private readonly context: RoutingContext,
  ) {
  }

  public navigateTo(path: string): void {
    let current: Array<Route> | undefined = this.routes;
    const toActivate: Array<Route> = [];

    for (let segment of path.split('/')) {
      const match: Route | undefined = current?.find(r => r.segment === segment);
      current = match?.children;
      if (match) {
        toActivate.push(match);
      }
    }

    console.log('found route', toActivate);
    this.context.activate(toActivate);
  }
}
