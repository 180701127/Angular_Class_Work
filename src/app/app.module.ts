import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { LocalComponent } from './local/local.component';
import { ContactModule } from './contact/contact.module';
import { CommonModule, LocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CitycodePipe } from './citycode.pipe';
import { SquarePipe } from './square.pipe';
import { LoanComponent } from './loan/loan.component';
import { LoantypesComponent } from './loantypes/loantypes.component';
import { HOMEComponent } from './home/home.component';
import { ABOUTUSComponent } from './about-us/about-us.component';
import { GALLARYComponent } from './gallary/gallary.component';
import { CONTACTUSComponent } from './contact-us/contact-us.component';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import {HashLocationStrategy} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AddLoanComponent } from './loantypes/add-loan/add-loan.component';
import { EditLoanComponent } from './loantypes/edit-loan/edit-loan.component';
import { DeleteLoanComponent } from './loantypes/delete-loan/delete-loan.component';
import { ProductTermComponent } from './product-term/product-term.component';
import { SearchComponent } from './search/search.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UsersModule } from './users/users.module';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { UserdataModule } from './userdata/userdata.module';
import { JscourseComponent } from './jscourse/jscourse.component';
import { AngcourseComponent } from './angcourse/angcourse.component';
import { EnrollService } from './services/enroll.service';
import { AddUserComponent } from './add-user/add-user.component';
import { HttpClientModule} from '@angular/common/http';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    LocalComponent,
    CitycodePipe,
    SquarePipe,
    LoanComponent,
    LoantypesComponent,
    
    HOMEComponent,
    ABOUTUSComponent,
    GALLARYComponent,
    CONTACTUSComponent,
    ProductComponent,
    AddLoanComponent,
    EditLoanComponent,
    DeleteLoanComponent,
    ProductTermComponent,
    SearchComponent,
    PagenotfoundComponent,
    AddCustomerComponent,
    JscourseComponent,
    AngcourseComponent,
    AddUserComponent,
    C1Component,
    C2Component,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    
    BrowserAnimationsModule,
    MatButtonModule,
    ContactModule,
    CommonModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    UsersModule,
    ReactiveFormsModule,
    UserdataModule,
    HttpClientModule
  ],
  providers: [{provide:LocationStrategy, useClass:HashLocationStrategy},EnrollService],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }
