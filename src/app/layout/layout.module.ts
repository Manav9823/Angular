import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
// import { MatSliderModule } from '@angular/material/slider';
// import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  imports: [
    CommonModule,
    // MatIconModule,
     MatToolbarModule
  ],
  exports:[
    HeaderComponent, FooterComponent, SidebarComponent
  ]
})
export class LayoutModule { }
