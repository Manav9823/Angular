import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams}   from '@angular/common/http' 
import { Observable } from 'rxjs';

interface User {
  name:string;
  email:string;
}

@Injectable({
  providedIn: 'root'
})
export class ListuserService {

  constructor(private http:HttpClient) { }


  adduser(body){
    return this.http.post('https://jsonplaceholder.typicode.com/users',{body})
  }

  getUser(){
    // const user = [
    //   {name:'manav', id:23},
    //   {name:'bansal',id:24}
    // ]
    // return user
    const header = new HttpHeaders({
      'content-type':'application/json',
      'authenticationToken':'12345'
    })

    const params = new HttpParams()
    .set('pageNum','10')
    .set('pagecount','20')

    return this.http.get('https://jsonplaceholder.typicode.com/users',{headers:header, params:params})
  }
}
