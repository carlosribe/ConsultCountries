import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'mapKey' })
export class MapKeyPipe implements PipeTransform {
    transform(value: object) {
        return value ? Object.keys(value).join(' , ') : '';
    }
}