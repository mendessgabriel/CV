class Experience {
    public enterprise: string;
    public role: string;
    public description: string;
    public startedMonth: number;
    public startedYear: number;
    public stillWorking: boolean;
    public endYear: number;
    public endMonth: number;

    constructor(
        Enterprise: string, 
        Role: string, 
        Description: string, 
        StartedMonth: number,
        StartedYear: number,
        StillWorking: boolean,
        EndYear: number,
        EndMonth: number) {
            this.enterprise = Enterprise;
            this.role = Role;
            this.description = Description;
            this.startedMonth = StartedMonth;
            this.startedYear = StartedYear;
            this.stillWorking = StillWorking;
            this.endMonth = EndMonth;
            this.endYear = EndYear;
    }

}

export default Experience;