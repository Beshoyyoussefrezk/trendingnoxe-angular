import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(data:any[], term:string ): any[] {
    return data.filter( d =>{ d.name.toLowerCase().includes(term.toLowerCase())});
  }

}
