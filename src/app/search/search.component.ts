import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  color:string =''
  id   :number = 0
  size:string = ''
  constructor(private activate:ActivatedRoute) {
    
    this.activate.queryParams.subscribe((params)=>{
      this.color = params.color
      this.id    = params.id 
      this.size  = params.size
      console.log(params)
    })
   }

  ngOnInit(): void {
  }

}
