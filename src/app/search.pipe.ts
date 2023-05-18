import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(data: any[], term: string): any[] {
    return data.filter(d => {
      if (d.name != undefined) {
        return d.name.toLowerCase().includes(term.toLowerCase())
      } else {
        return d.title.toLowerCase().includes(term.toLowerCase())
      }
    });
  }

}
