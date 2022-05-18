import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadsListeningComponent } from './leads-listening/leads-listening.component';
import { LeadsGridComponent } from './leads-listening/leads-grid/leads-grid.component';
import { LeadsToolsComponent } from './leads-listening/leads-tools/leads-tools.component';



@NgModule({
  declarations: [LeadsListeningComponent, LeadsGridComponent, LeadsToolsComponent],
  imports: [
    CommonModule
  ]
})
export class LeadsModule { }
