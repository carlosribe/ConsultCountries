import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'map' })
export class MapPipe implements PipeTransform {
    transform(value: object) {
        return value ? Object.keys(value).join(' , ') : '';
    }
}