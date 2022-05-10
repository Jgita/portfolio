import { Component, OnInit } from '@angular/core';
import { IAwards } from 'src/app/interfaces/award.interface';
import { IPortfolioInfo } from 'src/app/interfaces/portfolioInfo.interface';
import portfolioData from "../../shared/data.json";


@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {

  portfolioInfo: IPortfolioInfo = portfolioData;
  awards: IAwards[] = this.portfolioInfo.awards;

  constructor() { }

  ngOnInit() {
  }

}
