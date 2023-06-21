import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchDataService {

  constructor() { }
  Emitter= new Subject<string>()
  EmitData(d:string){
    this.Emitter.next(d)

  }
}
