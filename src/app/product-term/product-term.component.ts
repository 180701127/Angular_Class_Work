import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-term',
  templateUrl: './product-term.component.html',
  styleUrls: ['./product-term.component.scss']
})
export class ProductTermComponent {
  constructor(private act:ActivatedRoute){
    this.act.params.subscribe(params=>{console.log(params);
    this.product_termId=params['num']
    this.product_name=params['Ptname']
    
    })
    

  }
product_termId:any;
product_name:any;
}
