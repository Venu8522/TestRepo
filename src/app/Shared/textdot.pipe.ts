import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textdot'
})
export class TextdotPipe implements PipeTransform {

  transform(text: string, value: number): string {
    console.log(value);
    if (text !== null) {
      if (text.length > value)
        text = text.substring(0, value - 1) + '...';
      else
        return text;
    }

    return text;
  }

}
