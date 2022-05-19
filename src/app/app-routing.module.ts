import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoansTypesComponent } from './loans-types/loans-types.component';
import { LoansComponent } from './loans/loans.component';

const routes: Routes = [
  {
    path:'loans',
    component:LoansComponent
  },
  {
    path:'loans-types',
    component:LoansTypesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
