import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionDonationComponent } from '../../components/option-donation/option-donation.component'; 

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
  public optionsDonations: { url: string, text: string }[] = [
    { 
      url: "/assets/icons/alimento.png",
      text: "Alimentos"
    },
    { 
      url: "/assets/icons/roupas.png",
      text: "Roupas"
    },
    { 
      url: "/assets/icons/brinquedos.png",
      text: "Brinquedos"
    },
    { 
      url: "/assets/icons/dinheiro.png",
      text: "Dinheiro"
    },
    { 
      url: "/assets/icons/outros.png",
      text: "Outros"
    },
  ];
}
