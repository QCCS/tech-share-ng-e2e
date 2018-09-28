import {NgModule} from '@angular/core';
import {RouterModule, Routes,RouterOutlet} from '@angular/router';

import {LoginComponent} from '../login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule,RouterOutlet]
})
export class AppRoutingModule {
}
