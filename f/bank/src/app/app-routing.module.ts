import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { MoneyTransferComponent } from './money-transfer/money-transfer.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: 'customer', component: CustomerComponent
   },
   {
     path:'money', component: MoneyTransferComponent
   },
   {
    path:'', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
