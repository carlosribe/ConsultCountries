import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'mapValue' })
export class MapValuePipe implements PipeTransform {
    transform(value: object) {
        return value ? Object.values(value).join(', ') : '';
    }
}