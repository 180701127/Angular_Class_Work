import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  h= new HttpHeaders({
    'content-type':'application/json',
    'authentication-token':'145',
  })
  p = new HttpParams().set('pageSize','10').set('pageNum', '5')

  constructor(private Http:HttpClient) { }
  getusers(){
    
    return this.Http.get('https://jsonplaceholder.typicode.com/users',{headers:this.h,params:this.p})
  }
  postusers(data:any){
    console.log('Data submitted to API')
    return this.Http.post('https://jsonplaceholder.typicode.com/users',data,{headers:this.h,params:this.p});
  }
  putusers(){
    const p1= new HttpParams().set('id','1')
    console.log("data updated to API")
    const data={id:'10'};
    this.Http.put('https://jsonplaceholder.typicode.com/users',data,{headers:this.h,params:p1}).subscribe(data=>{console.log('success')},err=>{console.log('error')})

  }
  deleteusers(){
    return this.Http.delete('https://jsonplaceholder.typicode.com/users/'+ 5,{headers:this.h,params:this.p})
  }
}
