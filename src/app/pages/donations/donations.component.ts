import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionDonationComponent } from '../../components/option-donation/option-donation.component'; 
import { Donations } from '../../types/donations.type';

@Component({
  selector: 'app-donations',
  standalone: true,
  imports: [
    CommonModule,
    OptionDonationComponent,
  ],
  templateUrl: './donations.component.html',
  styleUrl: './donations.component.scss'
})
export class DonationsComponent {
  public optionsDonations: Donations[] = [
    { 
      url: "/assets/icons/alimento.png",
      text: "Alimentos",
      route: "/foods"
    },
    { 
      url: "/assets/icons/roupas.png",
      text: "Roupas",
      route: "/clothes"
    },
    { 
      url: "/assets/icons/brinquedos.png",
      text: "Brinquedos",
      route: "/toys"
    },
    { 
      url: "/assets/icons/dinheiro.png",
      text: "Dinheiro",
      route: "/money"
    },
    { 
      url: "/assets/icons/outros.png",
      text: "Outros",
      route: "/others"
    },
  ];
}
