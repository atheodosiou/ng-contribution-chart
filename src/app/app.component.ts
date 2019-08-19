import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-contribution-chart';
  totalWeeks = 0;
  totalDays = 0;
  ngOnInit() {
    this.totalDays = this.getTotalDaysOfYear(2013);
    this.totalWeeks = 52;
  }

  private isLeapYear(year: number) {
    return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
  }

  private getTotalDaysOfYear(year: number) {
    return this.isLeapYear(year) ? 366 : 365;
  }
}
