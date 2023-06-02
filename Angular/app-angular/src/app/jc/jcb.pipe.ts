import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jcb'
})
export class JcbPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
