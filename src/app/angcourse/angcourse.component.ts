import { Component } from '@angular/core';
import { EnrollService } from '../services/enroll.service';

@Component({
  selector: 'app-angcourse',
  templateUrl: './angcourse.component.html',
  styleUrls: ['./angcourse.component.scss'],
  
})
export class AngcourseComponent {
  constructor(private Eservice: EnrollService){ }
  title="Ang_17";
  onEnroll(){
    
    this.Eservice.OnEnrollService(this.title);
  }

}


