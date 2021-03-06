import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.scss']
})
export class TimeTableComponent implements OnInit {

  @Input() courses: Course[] = [];

  constructor() { }

  ngOnInit(): void {
    this.courses.push(
      new Course(
        new Date('December 1, 1998 12:00:00'),
        new Date('December 1, 1998 14:00:00'),
        'Computer Graphics',
        'C403'
      )
    );
    this.courses.push(
      new Course(
        new Date('December 1, 1998 14:00:00'),
        new Date('December 1, 1998 16:00:00'),
        'Numeric Calculus',
        'C411'
      )
    );
  }

}
