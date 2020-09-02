export class Job {
    public name: string;
    public company: string;
    public logoPath: string;
    public description: string;

    constructor(
        name: string,
        company: string,
        logoPath: string,
        desc: string) {
            this.name = name;
            this.company = company;
            this.logoPath = logoPath;
            this.description = desc;
    }
}

/*
    Other Information Needed
    Job Category *
    Full Time/Contract
    Headquarters/Location
    Region
    Apply Link *

    Company Model
    companyName
    companyStatement
    companyLogo
    companyURL
    companyEmail
    companyDesc
*/
