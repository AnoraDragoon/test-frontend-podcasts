import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'intToTime'
})
export class IntToTimePipe implements PipeTransform {

    transform(value: number): string {
        let result: string = '';
        if (value > 3600) {
            result += `${Math.floor(value / 3600)}:`;
            value = value % 3600;
        }

        if (value > 60) {
            result += `${Math.floor(value / 60)}:`;
            value = value % 60;
        }

        result += `${Math.floor(value)}`;

        return result;
    }

}
