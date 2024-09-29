import { Component } from '@angular/core';
import { SocialMediasComponent } from '../../components/social-medias/social-medias.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SocialMedias } from '../../types/social-medias.type';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    SocialMediasComponent,
    CommonModule,
    RouterLink
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  public socialMedias: SocialMedias[] = [
    {
      url: "/assets/icons/youtube.png",
      socialMedia: "https://www.youtube.com/@iclarpaulodetarso6542"
    },
    {
      url: "/assets/icons/instagram.png",
      socialMedia: "https://www.instagram.com/iclarpaulodetarso/"
    },
    {
      url: "/assets/icons/facebook.png",
      socialMedia: "https://www.facebook.com/iclarpaulodetarso"
    },
    {
      url: "/assets/icons/e-mail.png",
      socialMedia: "mailto:lar@iclarpaulodetarso.org.br?subject=Assunto do e-mail&body=Corpo do e-mail"
    },
  ];
}
