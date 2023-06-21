import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddContactComponent } from './add-contact/add-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ListContactComponent } from './list-contact/list-contact.component';
import { DeleteContactComponent } from './delete-contact/delete-contact.component';
import { ContactHomepageComponent } from './edit-contact/contact-homepage/contact-homepage.component';
import { ContactgridComponent } from './edit-contact/contact-homepage/contactgrid/contactgrid.component';
import { ContacttoolsComponent } from './edit-contact/contact-homepage/contacttools/contacttools.component';
import { DownloadpdfComponent } from './edit-contact/contact-homepage/contacttools/downloadpdf/downloadpdf.component';
import { DownloadexcelComponent } from './edit-contact/contact-homepage/contacttools/downloadexcel/downloadexcel.component';




@NgModule({
  declarations: [
    AddContactComponent,
    EditContactComponent,
    ListContactComponent,
    DeleteContactComponent,
    ContactHomepageComponent,
    ContactgridComponent,
    ContacttoolsComponent,
    DownloadpdfComponent,
    DownloadexcelComponent
    
  

  ],
  imports: [
    CommonModule
  ],
  exports:[
    AddContactComponent,
    EditContactComponent,
    ListContactComponent,
    DeleteContactComponent


  ],
  
})
export class ContactModule { }
