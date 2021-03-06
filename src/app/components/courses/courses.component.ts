import { Component, OnInit, ViewChild } from '@angular/core';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  @ViewChild(CourseCardComponent) cardsChild: CourseCardComponent;

  constructor() { }

  ngOnInit() {
  }

  public goToTrips(el: HTMLElement): void {
    el.scrollIntoView({behavior: 'smooth'});
    this.cardsChild.focus();
  }
}
