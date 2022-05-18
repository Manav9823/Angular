import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';



@NgModule({
  declarations: [ListComponent, ViewComponent, AddComponent, DeleteComponent, EditComponent],
  imports: [
    CommonModule
  ]
})
export class ContactsModule { }
