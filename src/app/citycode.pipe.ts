import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'citycode'
})
export class CitycodePipe implements PipeTransform {

  transform(value:string,...a:string[]):string {
    if(value=="Madurai")
    {
      return "MDU"
    }
    else if(value=="Chennai")
    {
      return "CHN"
    }
    else if(value=="Bangalore")
    {
      return "BLR"
    }
    else{
      return a[0];

    }
    
    
  }
  

}
