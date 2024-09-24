import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';

const routes: Routes = [
  {
    path: 'customer',
    component: CustomerComponent,
  },

  {
    path: '',
    redirectTo: '/customer',
    pathMatch: 'full',
  },

  {
    path: 'customer/new',
    component: CreateCustomerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
