import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginflowComponent } from './loginflow/loginflow.component';
import { PaymentsComponent } from './payments/payments.component';

const routes: Routes = [

  { path: 'login-flow', component: LoginflowComponent },
  { path: 'Payments', component: PaymentsComponent },
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
