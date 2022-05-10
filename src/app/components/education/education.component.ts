import { Component, OnInit } from '@angular/core';
import { IEducation } from 'src/app/interfaces/education.interface';
import { IPortfolioInfo } from 'src/app/interfaces/portfolioInfo.interface';
import portfolioData from "../../shared/data.json";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  portfolioInfo: IPortfolioInfo = portfolioData;
  education: IEducation[] = this.portfolioInfo.education;

  constructor() { }

  ngOnInit() {
  }

}
