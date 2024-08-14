import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../components/modal/modal.component';
import { Donations } from '../../types/donations.type';
import { CpfPipe } from '../../pipes/cpf.pipe';
import { ValuePipe } from '../../pipes/value.pipe';
import { CardNumberPipe } from '../../pipes/card-number.pipe';
import { DatePipe } from '../../pipes/date.pipe';
import { HourPipe } from '../../pipes/hour.pipe';

@Component({
  selector: 'app-type-donation',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    CommonModule,
    ModalComponent,
    CpfPipe,
    ValuePipe,
    CardNumberPipe,
    DatePipe,
    HourPipe,
  ],
  templateUrl: './type-donation.component.html',
  styleUrl: './type-donation.component.scss',
})
export class TypeDonationComponent implements OnInit {
  public typeDonation: string | null = '';
  public url: string = '';
  public textDonation: string = '';
  public hour: string = '';
  public value: string = '';
  public cpf: string = '';
  public cardNumber: string = '';
  public date: string = '';

  public types: Donations[] = [
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
      url: '/assets/icons/dinheiro.png',
      text: 'Pagamento',
      route: '/money',
    },
    {
      url: '/assets/icons/outros.png',
      text: '',
      route: '/others',
    },
  ];

  constructor(private route: ActivatedRoute, private matDialog: MatDialog) {}

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
    let date = input.value.replace(/\D/g, '');

    if (date.length > 2) {
      date = `${date.slice(0, 2)}/${date.slice(2)}`;
    }
    if (date.length > 5) {
      date = `${date.slice(0, 5)}/${date.slice(5)}`;
    }

    input.value = date;
    this.date = date;
  }

  public formatHour(event: Event) {
    const input = event.target as HTMLInputElement;
    let hour = input.value.replace(/\D/g, '');

    this.hour = hour;
  }

  public formatValue(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');

    this.value = value;
  }

  public formatCpf(event: Event) {
    const input = event.target as HTMLInputElement;
    let cpf = input.value.replace(/\D/g, '');

    this.cpf = cpf;
  }

  public formatCardNumber(event: Event): void {
    const input = event.target as HTMLInputElement;
    let cardNumber = input.value.replace(/\D/g, '');

    this.cardNumber = cardNumber;
  }

  public openModal(): void {
    this.matDialog.open(ModalComponent);
  }
}
