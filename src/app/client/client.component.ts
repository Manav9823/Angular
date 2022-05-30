import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import {ListuserService} from '../services/listuser.service'

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  // List = [
  //   {firstname:"manav", lastname:"bansal", id:23},
  //   {firstname:"Tom", lastname:"mehra", id:24},
  //   {firstname:"harry", lastname:"shrivastva", id:25},
  //   {firstname:"Raj", lastname:"pathak", id:26},
  // ]
  firstname:string=''
  msg = true
  clientType:string=''

  updatedUsers(event){
    console.log(event)
  }

  client(Form:NgForm){
    // console.log(Form.value)
    const postBody = {
      title: Form.value.firstname,
      body:  Form.value.clientType
    }
    this.user.adduser(postBody).subscribe(data =>{
      console.log(data)
    })
  }

  resetform(form:NgForm){
    form.reset()
  }
  // addUser(Form:NgForm){
  //   console.log()
  //   this.user.adduser(body)
  // }
  isTrue = true
  constructor(private user:ListuserService) { }
  ngOnInit(): void {
    this.user.getUser().subscribe(data => {
       console.log(data)
    })
  }

}
