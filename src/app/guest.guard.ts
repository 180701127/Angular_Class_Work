import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuestGuard implements CanActivate {
  //isGuest=true;
  role="admin";
  canActivate()
     {
      if(this.role=="guest")
      {
        return true;
      }
     else{
      return false;
     }
      
  }
  
}
