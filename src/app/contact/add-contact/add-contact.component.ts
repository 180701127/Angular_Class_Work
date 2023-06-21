import { Component, OnInit,OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit,OnChanges {
  ngOnInit():void{
    console.log("Hello world")

  }
  ngOnChanges(): void {
    alert("hello")
    
  }

}
