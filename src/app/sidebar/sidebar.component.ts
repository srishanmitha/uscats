import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  items=[
    { icon:"../../assets/home.png",name:'Home'},
    { icon:"../../assets/meeting-time.png",name:'Meetings'},
    { icon:"../../assets/recordings.png",name:'Recordings'},
    { icon:"../../assets/preferences.jpg",name:'Preferences'},
    { icon:"../../assets/images.png",name:'Insights'},
    { icon:"../../assets/download.png",name:'Downloads'},
    { icon:"../../assets/feedback.png",name:'Feedback'}
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
