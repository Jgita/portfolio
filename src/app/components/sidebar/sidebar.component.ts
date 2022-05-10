import { Component, OnInit } from '@angular/core';
import { Inavlinks } from 'src/app/interfaces/navlinks.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  listItems: Inavlinks[] = [
    { linkTitle: 'Home', link: '/home', icon:'home' },
    { linkTitle: 'About', link: '/about', icon:'person' },
    { linkTitle: 'Experience', link: '/experience', icon:'trending_up' },
    { linkTitle: 'Education', link: '/education', icon:'school' },
    { linkTitle: 'Projects', link: '/projects', icon:'assignment' },
    { linkTitle: 'Skills', link: '/skills', icon:'equalizer' },
    { linkTitle: 'Awards', link: '/Awards', icon:'grade' },

    { linkTitle: 'References', link: '/references', icon:'people' },
    { linkTitle: 'Contact', link: '/contact', icon:'contact_phone' },
  ];

  ngOnInit() {
  }

}
