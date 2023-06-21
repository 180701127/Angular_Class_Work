import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanComponent } from './loan/loan.component';
import { LoantypesComponent } from './loantypes/loantypes.component';
import { HOMEComponent } from './home/home.component';
import { ABOUTUSComponent } from './about-us/about-us.component';
import { ProductComponent } from './product/product.component';
import { GALLARYComponent } from './gallary/gallary.component';
import { ContactHomepageComponent } from './contact/edit-contact/contact-homepage/contact-homepage.component';
import { AddLoanComponent } from './loantypes/add-loan/add-loan.component';
import { EditLoanComponent } from './loantypes/edit-loan/edit-loan.component';
import { DeleteLoanComponent } from './loantypes/delete-loan/delete-loan.component';
import { ProductTermComponent } from './product-term/product-term.component';
import { SearchComponent } from './search/search.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AdminGuard } from './admin.guard';
import { GuestGuard } from './guest.guard';
import { AccessGuard } from './access.guard';
import { PreferenceGuard } from './preference.guard';
import { ConformGuard } from './conform.guard';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddUserComponent } from './userdata/add-user/add-user.component';
import { ListUsersComponent } from './users/list-users/list-users.component';

const routes: Routes = [
  {
    path:'Loan_app',
    component: LoanComponent,
    canActivate:[GuestGuard]
  },
  {
    path:'Loan_document',
    redirectTo: 'Loan_app'

  },
  {
    path:'product_terms/:num/:Ptname',
    component: ProductTermComponent

  },
  {
    path: 'loantypes',
    canActivate:[AdminGuard],
    children:[
    {path:'',component:LoantypesComponent},
    {path:'', canActivateChild:[AccessGuard],
    children:[
    {path:'add-loan',component:AddLoanComponent},
    {path:'edit-loan',component:EditLoanComponent},
    {path:'delete-loan',component:DeleteLoanComponent},
    ],
    
    }
    ],
    
    },
  {
    path:'Home',
    component: HOMEComponent,
    canActivate: [AdminGuard]
  },
  {
    path:'about',
    component: ABOUTUSComponent,
    canActivate: [AdminGuard]
  },
  {
    path:'product',
    component: ProductComponent,
    //canActivate:[AdminGuard,GuestGuard]
  },
  {
    path:'gallary',
    component: GALLARYComponent,
    canActivate: [AdminGuard]
  },
  {
    path:'contact',
    component: ContactHomepageComponent,
    canActivate: [AdminGuard]
  },
  {
    path:'search',
    component: SearchComponent,
    canDeactivate: [ConformGuard]
  },
  {
    path:'customer_addition',
    component: AddCustomerComponent
  },
  {
    path:'add-user',
    component: AddUserComponent 
  },
  {
    path:'list-user',
    component: ListUsersComponent
  },
  { path: 'payments', canLoad:[PreferenceGuard], loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) },
  {
    path:'**',
    component: PagenotfoundComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
