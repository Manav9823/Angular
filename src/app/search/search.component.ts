import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListuserService } from '../services/listuser.service'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  
  listuser:any     
  color   :string =''
  id      :number = 0
  size    :string = ''
  constructor(private activate:ActivatedRoute, private user:ListuserService) {
    
    // this.activate.queryParams.subscribe((params)=>{
    //   this.color = params.color
    //   this.id    = params.id 
    //   this.size  = params.size
    //   console.log(params)
    // })
   }

 

  ngOnInit(): void {
    this.user.getUser().subscribe(data =>{
      console.log(data)
      this.listuser = data
    })
  }

}
