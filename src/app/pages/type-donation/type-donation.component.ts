import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-type-donation',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    CommonModule,
  ],
  templateUrl: './type-donation.component.html',
  styleUrl: './type-donation.component.scss',
})
export class TypeDonationComponent implements OnInit {
  public typeDonation: string | null = '';
  public url: string = '';
  public textDonation: string = '';
  public formattedDate: string = '';
  public formattedHour: string = '';

  public types: { url: string; text: string; route: string }[] = [
    {
      url: '/assets/icons/alimento.png',
      text: 'de alimentos',
      route: '/foods',
    },
    {
      url: '/assets/icons/roupas.png',
      text: 'de roupas',
      route: '/clothes',
    },
    {
      url: '/assets/icons/brinquedos.png',
      text: 'de brinquedos',
      route: '/toys',
    },
    { 
      url: "/assets/icons/dinheiro.png",
      text: "Pagamento",
      route: "/money"
    },
    {
      url: '/assets/icons/outros.png',
      text: '',
      route: '/others',
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.typeDonation = param.get('type_donation');
    });

    this.types
      .filter((type) => this.typeDonation === type.route)
      .map((type) => {
        this.url = type.url;
        this.textDonation = type.text;
      });
  }

  public formatDate(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');

    if (value.length > 2) {
      value = `${value.slice(0, 2)}/${value.slice(2)}`;
    }
    if (value.length > 5) {
      value = `${value.slice(0, 5)}/${value.slice(5)}`;
    }

    input.value = value;
    this.formattedDate = value;
  }

  public formatHour(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (value.length > 2) {
      value = `${value.slice(0, 2)}:${value.slice(2, 4)}`; // Adiciona ':' após os dois primeiros caracteres e limita a 4 dígitos
    } else if (value.length > 0) {
      value = `${value.slice(0, 2)}`;
    }

    // Atualiza o valor do input sem apagar o texto existente
    input.value = value;
    this.formattedHour = value;
  }
}
