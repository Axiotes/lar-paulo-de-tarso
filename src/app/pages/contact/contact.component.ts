import { Component } from '@angular/core';
import { SocialMediasComponent } from '../../components/social-medias/social-medias.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SocialMedias } from '../../types/social-medias.type';
import {
  Facebook,
  Instagram,
  LucideAngularModule,
  Mail,
  MapPin,
  Youtube,
} from 'lucide-angular';
import { LucideIconData } from 'lucide-angular/icons/types';

@Component({
    selector: 'app-contact',
    imports: [
        SocialMediasComponent,
        CommonModule,
        RouterLink,
        LucideAngularModule,
    ],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})
export class ContactComponent {
  public mapPin: LucideIconData = MapPin;

  public socialMedias: SocialMedias[] = [
    {
      icon: Youtube,
      socialMedia: 'https://www.youtube.com/@iclarpaulodetarso6542',
    },
    {
      icon: Instagram,
      socialMedia: 'https://www.instagram.com/iclarpaulodetarso/',
    },
    {
      icon: Facebook,
      socialMedia: 'https://www.facebook.com/iclarpaulodetarso',
    },
    {
      icon: Mail,
      socialMedia:
        'mailto:lar@iclarpaulodetarso.org.br?subject=Assunto do e-mail&body=Corpo do e-mail',
    },
  ];
}
