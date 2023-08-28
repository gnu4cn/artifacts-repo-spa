import { Pipe, PipeTransform } from '@angular/core';

/*
 * Format long file name
 * Max length, default is 100
 * Usage:
 *   filename | longFilename:maxLength
 * Example:
 *   {{ 'demo file name long at here, this is long file name omg please try input now.txt' |  longFilename:40}}
 *   formats to: demo file name long ...se try input now.txt
 */

@Pipe({
    name: 'longFilename'
})
export class LongFilenamePipe implements PipeTransform {
    public transform(filename?: string, maxLength: number = 30): any {
        if (filename === null || filename === undefined) {
            return filename;
        }
        let midLength = (maxLength / 2).toString();
        let pattern = '^([a-zA-Z\\s,\\-\\_\\.]{' + midLength + '})(.*)([a-zA-Z\\s,\\-\\_\\.]{' + midLength + '})$';
        let regex = new RegExp(pattern);
        return filename.replace(regex, '$1...$3');
    }

}
