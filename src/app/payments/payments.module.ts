import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { PaymentsComponent } from './payments.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PaymentsComponent],
  imports: [
    FormsModule,
    CommonModule,
    PaymentsRoutingModule
  ]
})
export class PaymentsModule { }
