import {ExtraOptions, RouterModule, Routes} from '@angular/router';

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
};
const APP_ROUTES: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
  },

  {
    path: 'contact',
    loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule),
  },
  /*{
    path: 'contact',
    loadChildren: './modules/embargos-desembargos/embargos-desembargos.module#EmbargosDesembargosModule',
    canLoad: [AuthGuard]
  },*/
  { path: '**',  redirectTo: 'home', pathMatch: 'full' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, routerOptions);
