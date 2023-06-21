import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent {
  firstname:string="";
  age:number=0;
  terms:boolean=false;
  customertype:number=0;
  description:string="";
  constructor(private Mservice:MyserviceService){ }
  
  customerADD(addcustomerforms:NgForm){
    console.log(addcustomerforms.value);
    console.log(addcustomerforms.valid);
    this.Mservice.postusers(addcustomerforms.value).subscribe(data=>{
      console.log("data sent successfully")
    },err=>{
      console.log("Something went wrong")
    });
  }
  flushdata(addcustomerforms:NgForm){
    addcustomerforms.resetForm();

  }
  cleardata(addcustomerforms:NgForm){
    let defaultData = {firstname:"Giri",age:20, terms:true, customertype:1400,description:"This is a dummy data"};
    addcustomerforms.setValue(defaultData);

  }

}
