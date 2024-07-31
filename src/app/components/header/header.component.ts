import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list'
import { RouterOutlet, RouterLink, Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    RouterOutlet,
    RouterLink,
    CommonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  public navOptions: { route: string, title: string, isActive: boolean }[] = [
    { route: "/home", title: "Início", isActive: false },
    { route: "/about-us", title: "Sobre", isActive: false },
    { route: "/news", title: "Notícias", isActive: false },
    { route: "/ethical-values", title: "Valores", isActive: false },
    { route: "/contact", title: "Contatos", isActive: false },
  ]

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.chanceActiveRoute("/home");
  }

  public chanceActiveRoute(route: string) {
    this.navOptions.filter((option) => option.route === route).map((option) => option.isActive = true);
    this.navOptions.filter((option) => option.route !== route).map((option) => option.isActive = false);
  }
}
