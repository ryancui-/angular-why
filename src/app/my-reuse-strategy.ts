import {ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy} from '@angular/router';
import {Store} from './store';

export class MyReuseStrategy implements RouteReuseStrategy {

  constructor(private _store: Store) {
  }

  _cacheRouters: { [key: string]: any } = {};

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return this._store.enableRouteReuse;
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    this._cacheRouters[route.routeConfig.path] = {
      snapshot: route,
      handle: handle
    };
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return this._store.enableRouteReuse && !!this._cacheRouters[route.routeConfig.path];
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    return (this._cacheRouters[route.routeConfig.path] || {}).handle;
  }

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig;
  }
}
