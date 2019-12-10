import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';


const HOME_ROUTES: Routes = [
  { path: '', component: HomeComponent},
];

export const HOME_ROUTING = RouterModule.forChild(HOME_ROUTES);
