import { AfterViewInit, Component, ContentChild, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  


  istrue:boolean=false
  // ng-content
  @ContentChild('admin')
  adminTemplate:TemplateRef<any>

  constructor() { }
  ngOnInit(): void {
  }

 

  


}
