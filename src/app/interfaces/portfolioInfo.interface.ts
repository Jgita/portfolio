import { IAwards } from "./award.interface";
import { IEducation } from "./education.interface";
import { IExperience } from "./experience.interface";
import { IProject } from "./project.interface";
import { IReferences } from "./references.interface";

export interface IPortfolioInfo {
    name: string,
    role: string,
    location: string,
    greetings: string,
    firstName:  string,
    speciality: string,
    birhdate: string,
    fullstop: string,
    comma: string,
    address: string,
    aboutHeader:string,
    skillsPageHeader: string,
    skillsDescription1: string,
    skillsDescription2: string,
    aboutDescription1: string,
    aboutDescription2: string,
    aboutDescription3: string,
    resume: string,
    detailsText: string,
    companyRole: string,
    skills:  string,
    workExp: IExperience[],
    education: IEducation[],
    projects: IProject[],
    awards: IAwards[],
    references: IReferences[]
}