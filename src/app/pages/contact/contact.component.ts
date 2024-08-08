import { Component } from '@angular/core';
import { SocialMediasComponent } from '../../components/social-medias/social-medias.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    SocialMediasComponent,
    CommonModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  public socialMedias: string[] = [
    ".",
    ".",
    ".",
    ".",
  ];
}
