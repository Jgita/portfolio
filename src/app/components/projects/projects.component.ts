import { Component, OnInit } from '@angular/core';
import { IPortfolioInfo } from 'src/app/interfaces/portfolioInfo.interface';
import { IProject } from 'src/app/interfaces/project.interface';
import portfolioData from "../../shared/data.json";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  portfolioInfo: IPortfolioInfo = portfolioData;
  projects: IProject[] = this.portfolioInfo.projects;

  constructor() { }

  ngOnInit() {
  }

}
