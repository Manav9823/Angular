import { Component, OnInit } from '@angular/core';

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

  msg = true

  isTrue = true
  constructor() { }

  ngOnInit(): void {
  }

}
