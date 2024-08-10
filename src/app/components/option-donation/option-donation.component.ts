import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-option-donation',
  standalone: true,
  imports: [],
  templateUrl: './option-donation.component.html',
  styleUrl: './option-donation.component.scss'
})
export class OptionDonationComponent {
  @Input({ required: true }) public url: string = "";
  @Input({ required: true }) public text: string = "";
}
