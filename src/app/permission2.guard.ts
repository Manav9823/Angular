import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ClientComponent } from './client/client.component';

@Injectable({
  providedIn: 'root'
})
export class Permission2Guard implements CanDeactivate<ClientComponent> {
  canDeactivate(component: ClientComponent){
    if(component.isTrue){
      return window.confirm("do you really want to return without saving")
    }
    return true;
  }
  
}
