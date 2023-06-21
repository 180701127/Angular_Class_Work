import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filtertext: string) {
    console.log(value,filtertext)
    //if(value.length!=0)
    //{
     // return value
    //}
    if (!value || !filtertext) {
      return value;
    }

    return value.filter((item: { gender: string; }) => item.gender.toUpperCase() === filtertext.toUpperCase());
  }
  

    //const student=[];
    //for(const s of value)
   // {
     // if(s['gender']== filtertext.toUpperCase()||s['name']==filtertext)
    //  {
     //   student.push(s)
     // }
      
  //  }
    
 //   return student;
   
 // }

}
