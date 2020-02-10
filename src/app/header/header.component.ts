import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  utilnavlinks = [
    { name:'CATS PATRICA', link:'#'},
    { name:'DONATE', link:'#'},
    { name:'VOLUNTEERS', link:'#'},
    { name:'CONTACT', link:'#'}
  ];

  socials = [
    {
      name: 'Github',
      icon: 'fa fa-github fa-2x',
      link: 'https://www.github.com/..'
    },
    {
      name: 'Twitter',
      icon: 'fa fa-twitter fa-2x',
      link: 'https://www.twitter.com/..'
    },
    {
      name: 'Keybase',
      icon: '',
      link: 'https://keybase.io/..'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
