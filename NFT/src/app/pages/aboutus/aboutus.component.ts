import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  member:any [] = [
    {name:"Memphis Diaz", imG:"https://html.modeltheme.com/enefti/assets/images/about/members/Main-member1.jpg", position:"CEO"},
    {name:"Rachel Adams", imG:"https://html.modeltheme.com/enefti/assets/images/about/members/Main-member2.jpg", position:"Marketing"},
    {name:"Alex Smith", imG:"https://html.modeltheme.com/enefti/assets/images/about/members/Main-member3.jpg", position:"SEO"},
    {name:"Diana Ramirez", imG:"https://html.modeltheme.com/enefti/assets/images/about/members/Main-member04.jpg", position:"IT Chief"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
