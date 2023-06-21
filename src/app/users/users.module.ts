import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { FilterUsersComponent } from './filter-users/filter-users.component';
import { MyserviceService } from '../myservice.service';



@NgModule({
  declarations: [
    ListUsersComponent,
    FilterUsersComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ListUsersComponent,
    FilterUsersComponent
  ],
  providers:[MyserviceService]

})
export class UsersModule { }
