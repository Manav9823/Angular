import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title      = 'angular'
  msg        = true
  arr        = ["manav", "harry", "tanveer", "divanshu", "deepak", "gurpartap"] 
  Marvel     = "Manav"
  styleprop  = "purple"
  styleclass = 'c1'
  condition  = 'c2'
  object     = {firstname:'manav', lastname:"bansal", learning:"angular"} 
  username   = 'manav'
  lowercaseexample = "MANAV"
  uppercaseexample = "manav"
  dateexample = Date.now()
  jsonexample = {username:"manav", learning:"angular"}
  currencyexample = 23
  sayHello(name:string){
   console.log(`hello ${name} How are you...`)
  }
  mouseHover(name:string){
    console.log(` ${name} Hovered over me...`)
  }
}
