import { Routes, RouterModule } from '@angular/router';
import {ContactComponent} from './pages/contact/contact.component';


const CONTACT_ROUTES: Routes = [
  { path: '', component: ContactComponent},
];

export const CONTACT_ROUTING = RouterModule.forChild(CONTACT_ROUTES);
