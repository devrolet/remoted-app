export class Job {
    public name: string;
    public company: string;
    public logoPath: string;
    public description: string;

    constructor(name: string, company: string, logoPath: string, desc: string) {
        this.name = name;
        this.company = company;
        this.logoPath = logoPath;
        this.description = desc;
    }
}
