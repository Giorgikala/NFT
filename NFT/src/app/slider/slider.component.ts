import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SLIDERComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      spaceBetween: 30,
      loop: true,
      
      
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }

}
