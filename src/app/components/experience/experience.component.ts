import { Component, OnInit } from '@angular/core';
import { IExperience } from 'src/app/interfaces/experience.interface';
import { IPortfolioInfo } from 'src/app/interfaces/portfolioInfo.interface';
import portfolioData from "../../shared/data.json";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  portfolioInfo: IPortfolioInfo = portfolioData;


  experience: IExperience[] = this.portfolioInfo.workExp;

  constructor() { }

  ngOnInit() {
  }

  getTechnologies(technologies: string[]){
    if(technologies && technologies.length){
      return technologies;
    }
    return '-';
  }

}
