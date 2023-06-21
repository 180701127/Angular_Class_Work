import { Component, OnInit } from '@angular/core';
import { SearchDataService } from '../search-data.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.scss']
})
export class C2Component implements OnInit {
  OutputData:any;
  constructor(private sData:SearchDataService){}
  ngOnInit(): void {
    this.sData.Emitter.subscribe((val)=>{
      this.OutputData=val;

    })

    
  }

}
