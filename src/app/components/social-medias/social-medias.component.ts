import { Component, Input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { LucideIconData } from 'lucide-angular/icons/types';

@Component({
    selector: 'app-social-medias',
    imports: [LucideAngularModule],
    templateUrl: './social-medias.component.html',
    styleUrl: './social-medias.component.scss'
})
export class SocialMediasComponent {
  @Input({ required: true }) public icon!: LucideIconData;
  @Input({ required: true }) public socialMedia!: string;
}
