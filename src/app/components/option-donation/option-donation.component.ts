import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

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
  @Input({ required: true }) public route: string = "";

  constructor (
    private router: Router,
  ) { }

  public navigateDonation(route: string) {
    this.router.navigate(['/donations', route]);
  }
}
