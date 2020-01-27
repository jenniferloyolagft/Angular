import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'fur'})
export class FurPipe implements PipeTransform {
  transform(value) {
    return value ? 'Pelo Corto' : 'Pelo Largo';
  }
}
