import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-new',
  standalone: true,
  imports: [],
  templateUrl: './card-new.component.html',
  styleUrl: './card-new.component.scss'
})
export class CardNewComponent {
  @Input({ required: true }) public url: string = "";
  @Input({ required: true }) public message: string = "";
  @Input({ required: true }) public readMore: string = "";
}
