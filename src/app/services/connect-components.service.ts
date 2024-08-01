import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectComponentsService {
  private activeRouteSubject: BehaviorSubject<string> = new BehaviorSubject<string>("");

  constructor() { }

  public getActiveRoute(): Observable<string> {
    return this.activeRouteSubject.asObservable();
  }

  public setActiveRoute(route: string): void {
    this.activeRouteSubject.next(route);
  }
}
