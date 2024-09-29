import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import {
  RouterOutlet,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavOptions } from '../../types/nav-option.type';

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
    RouterLinkActive,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public navOptions: NavOptions[] = [
    { route: '/home', title: 'Início' },
    { route: '/about-us', title: 'Sobre' },
    { route: '/news', title: 'Notícias' },
    { route: '/ethical-values', title: 'Valores' },
    { route: '/contact', title: 'Contatos' },
  ];
}
