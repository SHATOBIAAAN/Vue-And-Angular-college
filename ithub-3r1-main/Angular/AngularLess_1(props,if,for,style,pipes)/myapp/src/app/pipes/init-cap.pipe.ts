import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initCap'
})
export class InitCapPipe implements PipeTransform {
  transform(value: string): string {
    const firstPart = value[0].toUpperCase()
    const secondPart = value.slice(1).toLowerCase()
    return firstPart + secondPart;
  }

}
