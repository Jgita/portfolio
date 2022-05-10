import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IPortfolioInfo } from 'src/app/interfaces/portfolioInfo.interface';
// @ts-ignore
import * as TagCloud from "TagCloud";
import portfolioData from "../../shared/data.json";

// const TagCloud = require("TagCloud");
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {

portfolioInfo: IPortfolioInfo = portfolioData;

@ViewChild('tagcloud', {static: true}) 
container: ElementRef;
 texts = [
   'JavaScript', 'TypeScript', 'AngularJs', 'ES6 & ES7',  'GIT', 
   'CSS', 'SCSS', 'HTML', 'Bootstrap', 'Flexbox', 'Material Design', 
   'Ionic', 'PrimeNg', 'JSON', 'RXJS', 'Angular', 'i18n',
   'Loadsh', 'Moment', 'NodeJs', 'NPM', 'YARN', 'Bable', 
];
 options = {
  'radius': 250,
  'maxSpeed': 'fast',
  'containerClass': 'cloudTag',
  'itemClass':'cloud-item'
};
  constructor() { }

  ngOnInit() {
    TagCloud(this.container.nativeElement, this.texts, this.options)
  }

}
