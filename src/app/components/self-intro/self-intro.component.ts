import { Component, OnInit } from '@angular/core';
import { IPortfolioInfo } from '../../interfaces/portfolioInfo.interface';
import portfolioData from "../../shared/data.json";

@Component({
  selector: 'app-self-intro',
  templateUrl: './self-intro.component.html',
  styleUrls: ['./self-intro.component.scss']
})
export class SelfIntroComponent implements OnInit {

  portfolioInfo: IPortfolioInfo = portfolioData;

  constructor() { }

  ngOnInit() {
    console.log('portfolioData', portfolioData)
  }

}
