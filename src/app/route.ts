import { Type } from "@angular/core";

export interface Route {
  readonly children: Array<Route>;
  readonly segment: string;
  readonly component: Type<unknown>;
}
