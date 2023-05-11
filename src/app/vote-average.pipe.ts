import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'voteAverage'
})
export class VoteAveragePipe implements PipeTransform {

  transform(voteAverage:number): string {
    return voteAverage.toFixed(1);
  }

}
