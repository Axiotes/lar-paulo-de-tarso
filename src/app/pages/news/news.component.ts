import { Component } from '@angular/core';
import { CardNewComponent } from '../../components/card-new/card-new.component';
import { CommonModule } from '@angular/common';

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
  public news: { url: string, message: string }[] = [
    { url: "/assets/images/news01.png", message: "Um dia especial" },
    { url: "/assets/images/news02.png", message: "Lista de casamento" },
    { url: "/assets/images/news03.png", message: "Sábado da alegria" },
  ]
}
