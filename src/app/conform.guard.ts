import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SearchComponent } from './search/search.component';

@Injectable({
  providedIn: 'root'
})
export class ConformGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: SearchComponent)
     {
      if(component.isdir)
      {
        return window.confirm('Are you sure');
      }
    return true;
  }
  
}
