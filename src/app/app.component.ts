import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Week, DayOfWeek } from './week';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private cdr:ChangeDetectorRef){}
  title = 'ng-contribution-chart';
  weeks: Week[]=[];
  totalDays=0;
  totalWeeks=0;
  year:number = 2016;
  ngOnInit() {
    this.totalWeeks = 53;
    this.totalDays = this.getTotalDaysOfYear(this.year);
    for(let i=1; i<=this.totalWeeks; i++){
      let days:DayOfWeek[]=[];
      if(i==53){
        console.log('i==53')
        let leftDays= this.totalDays - (52*7);
        console.log('Days left:',leftDays);
        for(let d=1; d<=leftDays; d++){
          days.push(new DayOfWeek(d,'Day Name'))
        }
        this.weeks.push(new Week(i,days));
      }else{
        console.log('Week:',i)
        for(let d=1; d<=7; d++){
          days.push(new DayOfWeek(d,'Day Name'))
        }
        this.weeks.push(new Week(i,days));
      }
    }
    console.log(this.weeks)
  }

  private isLeapYear(year: number) {
    return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
  }

  private getTotalDaysOfYear(year: number) {
    return this.isLeapYear(year) ? 366 : 365;
  }
}
