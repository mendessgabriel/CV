class Certification {
    public id: number;
    public name: string;
    public link: string;
    public description: string;
    public image: string;

    constructor(Id: number, Name: string, Link: string, Description: string, Image: string) {
        this.id = Id;
        this.name = Name;
        this.link = Link;
        this.description = Description;
        this.image = Image;
    }
}

export default Certification;