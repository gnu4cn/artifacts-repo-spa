import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'longFilename'
})
export class LongFilenamePipe implements PipeTransform {
  public transform(filename: string, maxLength: number = 100): any {
    if (filename === null) {
      return filename;
    }
    let midLength = (maxLength / 2).toString();
    let pattern = '^([a-zA-Z\\s,\\-\\_\\.]{' + midLength + '})(.*)([a-zA-Z\\s,\\-\\_\\.]{' + midLength + '})$';
    let regex = new RegExp(pattern);
    return filename.replace(regex, '$1...$3');
  }

}
