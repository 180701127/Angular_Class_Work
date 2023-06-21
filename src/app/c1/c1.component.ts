import { Component } from '@angular/core';
import { SearchDataService } from '../search-data.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.scss']
})
export class C1Component {
  constructor(private sData:SearchDataService){}
  InputData:any;
  DataSubmit(){
    this.sData.EmitData(this.InputData);

  }

}
