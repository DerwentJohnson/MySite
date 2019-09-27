import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './Accounts/Signup/signup.component';
import { ItemsFormComponent } from './ItemsForm/itemsform.component';

const routes: Routes = [
  { path: '', component: ItemsFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
