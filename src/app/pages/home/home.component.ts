import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ConnectComponentsService } from '../../services/connect-components.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(
    private connectComponents: ConnectComponentsService,
    private router: Router,
  ) { }

  public chanceActiveRoute(route: string): void {
    this.connectComponents.setActiveRoute(route);
  }
}
