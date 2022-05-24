import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  List = [
    {firstname:"manav", lastname:"bansal", id:23},
    {firstname:"Tom", lastname:"mehra", id:24},
    {firstname:"harry", lastname:"shrivastva", id:25},
    {firstname:"Raj", lastname:"pathak", id:26},
  ]
  firstname:string=''
  msg = true
  clientType:string=''

  updatedUsers(event){
    console.log(event)
  }

  client(Form:NgForm){
    console.log(Form.value)
  }

  resetform(form:NgForm){
    form.reset()
  }
  isTrue = true
  constructor() { }

  ngOnInit(): void {
  }

}
