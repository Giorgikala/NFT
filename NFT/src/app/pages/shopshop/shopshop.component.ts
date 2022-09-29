import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopshop',
  templateUrl: './shopshop.component.html',
  styleUrls: ['./shopshop.component.css']
})
export class ShopshopComponent implements OnInit {

  product:any [] = [
    {name:"Celebración Nyan Cat", imgSource:"https://html.modeltheme.com/enefti/assets/images/shop/enefti-shop-item-1.jpg", price:1.25, id:1},
    {name:"Chimera #977", pirce: 1.04, imgSource:"https://html.modeltheme.com/enefti/assets/images/shop/enefti-shop-item-2.jpg", price:2.3, id:2},
    {name:"Chimera #978", imgSource:"https://html.modeltheme.com/enefti/assets/images/shop/enefti-shop-item-3.jpg", price:402.48, id:3},
    {name:"Chimera #979", imgSource:"https://html.modeltheme.com/enefti/assets/images/shop/enefti-shop-item-4.jpg", price:3.98, id:4},
    {name:"Chimera #980", imgSource:"https://html.modeltheme.com/enefti/assets/images/shop/enefti-shop-item-5.jpg", price:2, id:5},
    {name:"Coolman’s Universe #9944", imgSource:"https://html.modeltheme.com/enefti/assets/images/shop/enefti-shop-item-6.jpg", price:1.04, id:6},
    {name:"Coolman’s Universe #9977", imgSource:"https://html.modeltheme.com/enefti/assets/images/shop/enefti-shop-item-7.jpg", price:0.89, id:7},
    {name:"Coolman’s Universe #9997", imgSource:"https://html.modeltheme.com/enefti/assets/images/shop/enefti-shop-item-8.jpg", price:1.95, id:8}, 
    {name:"Coolman’s Universe #9999", imgSource:"https://html.modeltheme.com/enefti/assets/images/shop/enefti-shop-item-9.jpg", price:1, id:9}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
