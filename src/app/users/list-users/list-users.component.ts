import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/myservice.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  constructor(private Uservice:MyserviceService){}
  userdata:any;
  ngOnInit(){
    this.Uservice.getusers().subscribe(data=>{
      this.userdata = data;
      console.log(this.userdata);
    
    },err=>{
      console.log("Sorry data is not received from API")
    })

    //this.userdata=this.Uservice.getusers()
    console.log(this.userdata);


  }
  listdata:any;
  listupdate(event: any){
    console.log(event)
    this.listdata=event
  }

}
