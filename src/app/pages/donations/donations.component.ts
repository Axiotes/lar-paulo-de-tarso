import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionDonationComponent } from '../../components/option-donation/option-donation.component';
import { Donations } from '../../types/donations.type';
import { CreditCard, Ellipsis, Salad, Shapes, Shirt } from 'lucide-angular';

@Component({
  selector: 'app-donations',
  standalone: true,
  imports: [CommonModule, OptionDonationComponent],
  templateUrl: './donations.component.html',
  styleUrl: './donations.component.scss',
})
export class DonationsComponent {
  public optionsDonations: Donations[] = [
    {
      icon: Salad,
      text: 'Alimentos',
      route: '/foods',
    },
    {
      icon: Shirt,
      text: 'Roupas',
      route: '/clothes',
    },
    {
      icon: Shapes,
      text: 'Brinquedos',
      route: '/toys',
    },
    {
      icon: CreditCard,
      text: 'Dinheiro',
      route: '/money',
    },
    {
      icon: Ellipsis,
      text: 'Outros',
      route: '/others',
    },
  ];
}
