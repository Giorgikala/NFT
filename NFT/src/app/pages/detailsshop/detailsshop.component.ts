import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd } from '@angular/router';

@Component({
  selector: 'app-detailsshop',
  templateUrl: './detailsshop.component.html',
  styleUrls: ['./detailsshop.component.css']
})
export class DetailsshopComponent implements OnInit {
  id = Number (this.route.snapshot.paramMap.get("id"));
  constructor(private route: ActivatedRoute) { }


  product:any [] = [
    {name:"Celebración Nyan Cat", imgSrc:"https://html.modeltheme.com/enefti/assets/images/shop/enefti-shop-item-1.jpg", pirce:1.25, id:1},
    {name:"Chimera #977", pirce: 1.04, imgSrc:"https://html.modeltheme.com/enefti/assets/images/shop/enefti-shop-item-2.jpg", id:2},
    {name:"Chimera #978", imgSrc:"https://html.modeltheme.com/enefti/assets/images/shop/enefti-shop-item-3.jpg", pirce:402.48, id:3},
    {name:"Chimera #979", imgSrc:"https://html.modeltheme.com/enefti/assets/images/shop/enefti-shop-item-4.jpg", pirce:3.98, id:4},
    {name:"Chimera #980", imgSrc:"https://html.modeltheme.com/enefti/assets/images/shop/enefti-shop-item-5.jpg", pirce:2, id:5},
    {name:"Coolman’s Universe #9944", imgSrc:"https://html.modeltheme.com/enefti/assets/images/shop/enefti-shop-item-6.jpg", pirce:1.04, id:6},
    {name:"Coolman’s Universe #9977", imgSrc:"https://html.modeltheme.com/enefti/assets/images/shop/enefti-shop-item-7.jpg", pirce:0.89, id:7},
    {name:"Coolman’s Universe #9997", imgSrc:"https://html.modeltheme.com/enefti/assets/images/shop/enefti-shop-item-8.jpg", pirce:1.95, id:8},
    {name:"Coolman’s Universe #9999", imgSrc:"https://html.modeltheme.com/enefti/assets/images/shop/enefti-shop-item-9.jpg", pirce:1, id:9}
  ]
   selecTed: any;

  ngOnInit(): void {

    this.selecTed = this.product.find((product: any) =>{
      return product.id == this.id
    })
    console.log(this.selecTed)
  }

}
