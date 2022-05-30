import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { AuthGuard } from './auth.guard';
import { ClientComponent } from './client/client.component';
import { DeleteLoansComponent } from './delete-loans/delete-loans.component';
import { EditLoansComponent } from './edit-loans/edit-loans.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { Lazzy2Guard } from './lazzy2.guard';
import { LoansTypesComponent } from './loans-types/loans-types.component';
import { LoansComponent } from './loans/loans.component';
import { Permission2Guard } from './permission2.guard';
import { ProductsComponent } from './products/products.component';
import { SearchComponent } from './search/search.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { ViewUserComponent } from './users/view-user/view-user.component';

const routes: Routes = [
  {
    path:'loans',
    children:[
      {
        path:'addLoans',
        component:AddLoansComponent
      },
      {
        path:'deleteLoans',
        component:DeleteLoansComponent
      },
      {
        path:'editLoans',
        component:EditLoansComponent
      }
    ]
  },
  {
    path:'loans-types',
    component:LoansTypesComponent,
  },
  {
    path:'edituser',
    component:EditUserComponent
  },
  {
    path:'viewuser',
    component:ViewUserComponent
  },
  {
    path:'add-new-loans',
    redirectTo:'loans-types'
  },
  {
    path:'products/:id',
    component:ProductsComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'clients',
    component:ClientComponent,
    // canActivate:[AuthGuard]
    canDeactivate:[Permission2Guard]
  },
  {
    path:'edit/:id',
    component:EditLoansComponent
  },
  {
    path:'search',
    component:SearchComponent
  },
  { 
    path: 'payments', 
    loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule),
    canLoad:[Lazzy2Guard]
  },
  // {
  //   path:'**',
  //   component:ErrorComponent
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
