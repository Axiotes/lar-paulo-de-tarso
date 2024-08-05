import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-values',
  standalone: true,
  imports: [],
  templateUrl: './card-values.component.html',
  styleUrl: './card-values.component.scss'
})
export class CardValuesComponent {
  @Input({ required: true }) public url: string = "";
  @Input({ required: true }) public title: string = "";
  @Input({ required: true }) public message: string = "";
}
