import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivateChild {
  access:boolean=true;
  canActivateChild()
     {
      if(this.access)
      {
        return true;

      }
    
    else{
      return false;
    }
  }
  
}
