import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {


  icons:any [] = [
    {name:"Celebración Nyan Cat", imgSrc:"https://html.modeltheme.com/enefti/assets/images/shop/nft-trends/nft-tr-1.jpg", price:1.29},
    {name:"Golden Nyan Cat", imgSrc:"https://html.modeltheme.com/enefti/assets/images/shop/nft-trends/nft-tr-1.jpg", price:0.69 },
    {name:"Holographic Nyan Aoki", imgSrc:"https://html.modeltheme.com/enefti/assets/images/shop/nft-trends/nft-tr-3.jpg", price:8.09},
    {name:"Fiesta Dog", imgSrc:"https://html.modeltheme.com/enefti/assets/images/shop/nft-trends/nft-tr-4.jpg", price:1.98}





  ]

  constructor() { }

  ngOnInit(): void {
  }

}
