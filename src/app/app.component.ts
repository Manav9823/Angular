import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title      = 'angular'
  msg        = false
  arr        = ["manav", "harry", "tanveer", "divanshu", "deepak", "gurpartap"] 
  Marvel     = "Manav"
  styleprop  = "purple"
  styleclass = 'c1'
  condition  = 'c2'
}
