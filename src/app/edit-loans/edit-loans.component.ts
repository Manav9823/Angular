import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-loans',
  templateUrl: './edit-loans.component.html',
  styleUrls: ['./edit-loans.component.scss']
})
export class EditLoansComponent implements OnInit {
  
  editid:number=0
  constructor(private activate:ActivatedRoute) {
    this.activate.params.subscribe((params)=>{
      this.editid = params.id
    })
   }

  ngOnInit(): void {
  }

}
