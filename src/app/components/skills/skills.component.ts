import { Component, OnInit } from '@angular/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { IPortfolioInfo } from 'src/app/interfaces/portfolioInfo.interface';
import portfolioData from "../../shared/data.json";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  portfolioInfo: IPortfolioInfo = portfolioData;
  color = 'red';
  mode: ProgressBarMode = 'determinate';
  value = 50;
  bufferValue = 75;

  constructor() { }

  ngOnInit() {
  }

}
