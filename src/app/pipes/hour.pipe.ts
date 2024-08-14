import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hour',
  standalone: true,
})
export class HourPipe implements PipeTransform {
  transform(hour: string): string {
    if (!hour) {
      return '';
    }

    hour = hour.replace(/\D/g, '');

    if (hour.length > 2) {
      hour = `${hour.slice(0, 2)}:${hour.slice(2, 4)}`;
    }

    return hour;
  }
}
