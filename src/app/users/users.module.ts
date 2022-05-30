import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewUserComponent } from './view-user/view-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';



@NgModule({
  declarations: [ViewUserComponent, EditUserComponent],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
