import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-users',
  templateUrl: './filter-users.component.html',
  styleUrls: ['./filter-users.component.scss']
})
export class FilterUsersComponent {
  @Input()
  course:string=""
  @Input()
  student:string=""

  @Output()
  Updated_List= new EventEmitter

  update(){
    const obj =[{id:12,name:'logesh',age:23}]
    this.Updated_List.emit(obj)
    console.log(this.Updated_List)
  }


}
