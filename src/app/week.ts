export class Week {
    constructor(weekNumber: number, days: DayOfWeek[]) {
        this.days = days;
        this.weekNumber = weekNumber;
    }
    weekNumber: number;
    days: DayOfWeek[];
}

export class DayOfWeek {
    constructor(day: number, dayOfWeek: string) {
        this.day = day;
        this.dayOfWeek = dayOfWeek;
    }
    day: number;
    dayOfWeek: string;
}