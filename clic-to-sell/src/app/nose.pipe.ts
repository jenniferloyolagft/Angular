import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'nose'})
export class NosePipe implements PipeTransform {
  transform(value) {
    return value ? 'Hocico Corto' : 'Hocico Largo';
  }
}
