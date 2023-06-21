import { Component } from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  details: Array<any>

  constructor(){
    this.details=[
      {Id: 1, Name: 'Memory Card', Price:500},
      {Id: 2, Name: 'Pen Drive', Price:750},
      {Id: 3, Name: 'Power Bank', Price:100}

    ]
  }

}
