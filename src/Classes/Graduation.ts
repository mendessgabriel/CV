class Graduation {
    public name: string;
    public place: string;
    public startedYear: number;
    public startedMonth: number;
    public finishYear: number;
    public finishMonth: number;
    public stillActive: boolean;

    constructor(
        Name: string,
        Place: string,
        StartedYear: number,
        StartedMonth: number,
        FinishYear: number,
        FinishMonth: number,
        StillActive: boolean) {
        this.name = Name;
        this.place = Place;
        this.startedYear = StartedYear;
        this.startedMonth = StartedMonth;
        this.finishYear = FinishYear;
        this.finishMonth = FinishMonth;
        this.stillActive = StillActive;
    }
}

export default Graduation;