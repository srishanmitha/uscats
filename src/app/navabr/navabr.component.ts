import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navabr',
  templateUrl: './navabr.component.html',
  styleUrls: ['./navabr.component.css']
})
export class NavabrComponent implements OnInit {
 items=[
  { name:'Home', link:'/pageNotFound'},
   { name:'About',link:'/pageNotFound'},
   
   { name:'Leadership',link:'/pageNotFound'},
    {name:'Mission',link:'/filter'},
    {name:'Gallery',link:'/gallery'},
    {name:'Contact Us',link:'/pageNotFound'}
 ];
  constructor() { }

  ngOnInit(): void {
  }

}
