import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Inavlinks } from './interfaces/navlinks.interface';
import { Location } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, tap, map } from "rxjs/operators";
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit  {
  title = 'portfolio';
  selectedItem: any;
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(private location: Location, private router: Router, private observer: BreakpointObserver){}

  ngOnInit(): void {
    this.selectedItem = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map((event: any) => event.url),
      map((url) => url.replace('/','')),
      map(url => url || 'Home')
     ) 
  }

  ngAfterViewInit(): void {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }
}
