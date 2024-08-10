import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-medias',
  standalone: true,
  imports: [],
  templateUrl: './social-medias.component.html',
  styleUrl: './social-medias.component.scss'
})
export class SocialMediasComponent {
  @Input({ required: true }) public url: string = "";
  @Input({ required: true }) public socialMedia: string = "";
}
