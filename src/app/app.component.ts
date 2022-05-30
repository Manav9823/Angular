import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{

  names = [
    {
      state:'Mumbai',
      code : 23,
      language:'Marathi'
    },
    {
      state:'Punjab',
      code : 24,
      language:'Punjabi'
    },
    {
      state:'Delhi',
      code : 25,
      language:'Punjabi'
    },
  ]

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
  @ViewChild('header')
  heading:ElementRef

  @ViewChild(ContentComponent)
  contentChild:ContentComponent

  ngAfterViewInit(): void {
    // console.log(this.heading.nativeElement.innerHTML)
    // console.log(this.contentChild.istrue)
  }

}
