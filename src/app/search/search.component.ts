import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  sid:any;
  sname:any;
  sage:any;
  isdir=true;

  constructor(private act:ActivatedRoute){
    this.act.queryParams.subscribe(qP=>{
    console.log(qP);
    this.sid=qP['id']
    this.sname=qP['name']
    this.sage=qP['age']
    })

  }
}
