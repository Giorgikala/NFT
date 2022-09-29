import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-swiper-slider',
  templateUrl: './swiper-slider.component.html',
  styleUrls: ['./swiper-slider.component.css']
})
export class SwiperSliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }

}
