import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  //isAdmin=true;
  role="admin";
  canActivate()
     {
      if(this.role=="admin")
      {
        return true;
      }
     else{
      return false;
     }
      
    
  }
  
}
