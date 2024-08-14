import { Component } from '@angular/core';
import { CardNewComponent } from '../../components/card-new/card-new.component';
import { CommonModule } from '@angular/common';
import { News } from '../../types/news.type';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [
    CardNewComponent,
    CommonModule,
  ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
  public news: News[] = [
    { url: "/assets/images/news01.png", message: "Um dia especial", readMore: "https://www.instagram.com/p/CxjFLkeuowe/?igsh=MTMxYjBrMmRkZmFx" },
    { url: "/assets/images/news02.png", message: "Lista de casamento", readMore: "https://www.instagram.com/p/CxEOgOeOFCA/?igsh=MXd1ZndxZG5lNGF2cg==" },
    { url: "/assets/images/news03.png", message: "Sábado da alegria", readMore: "https://www.instagram.com/p/Cwqje9puz7f/?igsh=MXhvMXRoZDQxaDRieg==" },
  ]
}
