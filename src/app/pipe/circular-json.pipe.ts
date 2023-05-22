import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'circularJson'
})
export class CircularJsonPipe implements PipeTransform {

  public transform(value: object): void {
    // console.log(value);
    return;
}

}
