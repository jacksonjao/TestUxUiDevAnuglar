import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './pages/contact/contact.component';
import {CONTACT_ROUTING} from './contact.routes';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    CONTACT_ROUTING
  ]
})
export class ContactModule { }
