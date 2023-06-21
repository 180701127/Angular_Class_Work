import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
  
})
export class AddUserComponent {
  constructor(private Uservice:UserService){ }
  username:string='';
  status:string='';
  addUser(){
    this.Uservice.addnewuser(this.username,this.status);

  }

}
