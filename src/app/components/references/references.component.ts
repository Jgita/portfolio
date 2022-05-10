import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { IPortfolioInfo } from 'src/app/interfaces/portfolioInfo.interface';
import { IReferences } from 'src/app/interfaces/references.interface';
import portfolioData from "../../shared/data.json";

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent {
  portfolioInfo: IPortfolioInfo = portfolioData;
  references: IReferences[] = this.portfolioInfo.references;
}
