import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'value',
  standalone: true,
})
export class ValuePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    }

    value = value.replace(/\D/g, '');

    if (value.length) {
      value = (parseFloat(value) / 100).toFixed(2);
      value = value.replace('.', ',');
      value = `R$ ${value}`;
    }

    return value;
  }
}
