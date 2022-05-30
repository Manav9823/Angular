import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ListuserService } from '../services/listuser.service'
@Component({
  selector: 'app-loans-types',
  templateUrl: './loans-types.component.html',
  styleUrls: ['./loans-types.component.scss']
})
export class LoansTypesComponent implements OnInit,OnChanges {
  listuser:any    =[]
  constructor(private user:ListuserService) { }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    console.log(this.user.getUser())
    this.listuser = this.user.getUser()
  }

}
