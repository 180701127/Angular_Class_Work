import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { MyserviceService } from './myservice.service';
import { Observable, filter, from, interval, map, of } from 'rxjs';
import { SearchDataService } from './search-data.service';

@Component({
  selector: 'itv-root',
  templateUrl: './app.component.html',
  providers:[UserService,SearchDataService],
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  students = [
    {name:'A',course:'BIOMATH',marks:460,dob: new Date(17,9,2000),gender:'FEMALE'}, {name:'B',course:'CSE',marks:440,dob:new Date(17,5,2009),gender:'MALE'}, {name:'C',course:'CSE',marks:402,dob:new Date(17,1,2010),gender:'FEMALE'}, {name:'D',course:'BIOMATH',marks:490,dob:new Date(17,3,2007),gender:'MALE'}, {name:'E',course:'CSE',marks:450,dob:new Date(17,4,2005),gender:'FEMALE'}, {name:'F',course:'BIOMATH',marks:475,dob:new Date(17,2,2002),gender:'MALE'}
    ]
    filtertext:any;
  title = 'Angular';
  adduser(){
    this.students.push({name:'sample',course:'sample',marks:0,dob: new Date(17,9,2000),gender:'SAMPLE'})
  }
  flag= true;
  xyz= false;
  a=5;b=6;
  appusers:{name:string,status:string}[]=[]
  //MyObs= new Observable((observer)=>{
    //setTimeout(()=>{observer.next("1")},1000);
    //setTimeout(()=>{observer.next("2")},2000);
    //setTimeout(()=>{observer.next("3")},3000);
//observer.error(new Error('Sorry data missing'));
    //setTimeout(()=>{observer.next("4")},4000);
    //setTimeout(()=>{observer.next("5")},5000);
    //setTimeout(()=>{observer.complete()},6000);
  //})
 //observer:any;
  //MyObs= Observable.create((observer:any)=>{
   // setTimeout(()=>{observer.next("1")},1000);
    //setTimeout(()=>{observer.next("2")},2000);
    //setTimeout(()=>{observer.next("3")},3000);
//observer.error(new Error('Sorry data missing'));
    //setTimeout(()=>{observer.next("4")},4000);
    //setTimeout(()=>{observer.next("5")},5000);
    //setTimeout(()=>{observer.complete()},6000);
  //})
  array1=[5,10,1,3]
  array2=[4,7,70,50]
  //MyObs=of(this.array1,this.array2,50,"hello");
  MyObs=from(this.array1).pipe(map((val)=>{
    return val*val;
  })).pipe(filter((sqval)=>{
    return sqval>10;
  }))
  constructor(private Uservice:UserService,private Mservice:MyserviceService){ }
  counter=interval(1000);
  countvalue:any;
  startCounter(){
    this.countvalue=this.counter.subscribe((val)=>{
      console.log(val);
    });
    
  }
  stopCounter(){
    this.countvalue.unsubscribe();
  }
  consumers = [{id:1, name:'A'},{id:2, name:'B'},{id:3, name:'C'},{id:4, name:'D'}]
  sampleData= ({id:1,name:'A'})
  total:any;
  ngOnInit(){
    

this.total = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		resolve(this.consumers.length);
	},5000)
})
   

    this.appusers=this.Uservice.Users;
    this.MyObs.subscribe((data:any)=>{
      console.log(data);
    },(error:any)=>{
      console.log(error);
    },()=>{
      console.log("completed successfull");
    })

  }
  
  findgreater():boolean{
    if(this.a>this.b){
      return true;
    }
    else{
      return false
    }
  }
  y=[1,2,3,5]
  contacts = [{'firstName':'Naga','lastName':'Teacher','id':123},{'firstName':'muthu','lastName':'Student','id':456},{'firstName':'lakshmi','lastName':'Coordinator','id':789},{'firstName':'jeeva','lastName':'Manager','id':101},{'firstName':'harry','lastName':'HR','id':102}];
  category:any="Electronics"
  couponcode=99;
  tscolor='red';
  roll='pradesh';
  style="c3"
  role='student'
  styleproperty(){
    return false
  }
  student={sid:5,name:"Logesh"}
  name="this is useful"
  imgUrl = "https://im.rediff.com/300-300/movies/2014/aug/18anjaan.jpg";
  imgAlt='No Img Found'
  txtColor = "blue";
  display(){
    alert("Hi from the display method");
    }
    username="";
    //num1:any=0;
    //validate(){
      //if(this.num1=="")
      //{
        //return false;
        
      //}else{
        //return true;
      //}
    //}
    //check(){
      //if(this.num1>0){
        //return true;
      //}
      //else{
        //return false;

      //}
    //}
    num1:any
    curr = 125;
    per=0.6767;
    today=Date.now(); //mmddyyyy
    obj={id:5,name:'Suji',age:20};
    word1 = 'APPLE';  
    word2 = 'apple';
    per_0=77.6767;

    user = [{name:'Naga', city: 'Chennai'},{name:'surya',city:'salem'},{name:'Muthu', city: 'Madurai'},{name:'Lakshmi', city: 'Bangalore'}]
    
    num:number=0;

    delete(){
      this.Mservice.deleteusers().subscribe(data=>{console.log('success')},err=>{console.log('error')})
      
    }
    

}

