import { Component, OnInit } from '@angular/core';
import { IPortfolioInfo } from 'src/app/interfaces/portfolioInfo.interface';
import portfolioData from "../../shared/data.json";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  portfolioInfo: IPortfolioInfo = portfolioData;

  constructor() { }

  ngOnInit() {
  }

}
