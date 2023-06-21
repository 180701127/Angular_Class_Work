import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square'
})
export class SquarePipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    if(args[0]==undefined)
    {
      return value*value
      
    }
    else{
      console.log(args[0])
      return Math.pow(value,args[0])
    }
  }

}
