import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})

export class CategoryImagePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return `assets/img/${value}`;
  }

}
