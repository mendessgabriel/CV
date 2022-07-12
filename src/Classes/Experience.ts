class Experience {
    public enterprise: string;
    public role: string;
    public description: string;
    public startedMonth: number;
    public startedYear: number;
    public stillWorking: boolean;

    constructor(
        Enterprise: string, 
        Role: string, 
        Description: string, 
        StartedMonth: number,
        StartedYear: number,
        StillWorking: boolean) {
            this.enterprise = Enterprise;
            this.role = Role;
            this.description = Description;
            this.startedMonth = StartedMonth;
            this.startedYear = StartedYear;
            this.stillWorking = StillWorking;
    }

}

export default Experience;