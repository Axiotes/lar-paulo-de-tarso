import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardNumber',
  standalone: true,
})
export class CardNumberPipe implements PipeTransform {
  transform(cardNumber: string): string {
    if (!cardNumber) {
      return '';
    }

    cardNumber = cardNumber.replace(/\D/g, '');

    if (cardNumber.length > 4) {
      cardNumber = cardNumber.match(/.{1,4}/g)?.join(' ') || cardNumber;
    }

    return cardNumber;
  }
}
