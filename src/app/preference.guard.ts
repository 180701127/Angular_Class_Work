import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreferenceGuard implements CanLoad {
  preference=true;
  canLoad()
     {
      if(this.preference)
      {
        return true;
      }
      else{
        return false;
      }
  }
}
