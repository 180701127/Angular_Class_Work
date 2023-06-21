import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  addUserForm:FormGroup= new FormGroup({})
  constructor(private fb: FormBuilder,private Mservice:MyserviceService){}
  ngOnInit(): void {
    //this.addUserForm= new FormGroup({
      //'username': new FormControl(),
      //'LoanDescription': new FormControl()
    //})
    this.addUserForm= this.fb.group({
      'name': new FormControl('',[Validators.required]),
      'LoanDescription': new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(10)])
    })
    //const obj={'LoanDescription':'Hi I am a software engineer'};
    //this.addUserForm.patchValue(obj);
    this.addUserForm.valueChanges.subscribe(data=>{console.log(data)})
    this.Mservice.putusers();


    
    
  }
  createuser(){


    //console.log(this.addUserForm.get('LoanDescription')?.value);
    
  }
  
  

}
