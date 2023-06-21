import { Component } from '@angular/core';
import { EnrollService } from '../services/enroll.service';

@Component({
  selector: 'app-jscourse',
  templateUrl: './jscourse.component.html',
  styleUrls: ['./jscourse.component.scss'],
  
})
export class JscourseComponent {
  constructor(private Eservice:EnrollService){ }
  title="Small_JS";
  onEnroll(){
   
   this.Eservice.OnEnrollService(this.title);
  }

}
