import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtercomp',
  templateUrl: './filtercomp.component.html',
  styleUrls: ['./filtercomp.component.css']
})
export class FiltercompComponent implements OnInit {
  search = ''
  searchType = ''
employees=[
  {name:'jose',Age:'28',quali:'MS',Desig:'Lead',salary:'6876',Phone:'2765478',Address:'Arlington',dp:'femaleimage.png'},
  {name:'clara',Age:'28',quali:'MS',Desig:'Devloper',salary:'4876',Phone:'2765478',Address:'Maryland',dp:'maleimage.png'},
  {name:'maggi',Age:'28',quali:'MS',Desig:'Devloper',salary:'4876',Phone:'2765478',Address:'Newjersy',dp:'maleimage.png'},
  {name:'Naomi',Age:'28',quali:'MS',Desig:'Tester',salary:'2876',Phone:'2765478',Address:'Reston',dp:'maleimage.png'},
  {name:'Sophi',Age:'28',quali:'MS',Desig:'Devloper',salary:'4876',Phone:'2765478',Address:'Arlington',dp:'femaleimage.png'},
  {name:'Giles',Age:'28',quali:'MS',Desig:'Devloper',salary:'5876',Phone:'2765478',Address:'Fallchurch',dp:'maleimage.png'},
  {name:'Tolli',Age:'28',quali:'MS',Desig:'Tester',salary:'3876',Phone:'2765478',Address:'Herdon',dp:'maleimage.png'},
  {name:'Kaite',Age:'28',quali:'MS',Desig:'Devloper',salary:'4876',Phone:'2765478',Address:'Newyork',dp:'femaleimage.png'},
  {name:'Helli',Age:'28',quali:'MS',Desig:'Manager',salary:'6876',Phone:'2765478',Address:'Ashburn',dp:'maleimage.png'},
  {name:'Sony',Age:'28',quali:'MS',Desig:'Tester',salary:'2976',Phone:'2765478',Address:'Arlington',dp:'femaleimage.png'},
]
  constructor() { }

  ngOnInit(): void {
  }

}
