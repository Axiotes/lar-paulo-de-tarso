import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf',
  standalone: true,
})
export class CpfPipe implements PipeTransform {
  transform(value: string | number): string {
    if (!value) {
      return '';
    }

    let cpf = value.toString().replace(/\D/g, '');

    if (cpf.length > 3) {
      cpf = cpf.slice(0, 3) + '.' + cpf.slice(3);
    }
    if (cpf.length > 6) {
      cpf = cpf.slice(0, 7) + '.' + cpf.slice(7);
    }
    if (cpf.length > 9) {
      cpf = cpf.slice(0, 11) + '-' + cpf.slice(11, 13);
    }

    return cpf
  }
}
