import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-collectiondetails',
  templateUrl: './collectiondetails.component.html',
  styleUrls: ['./collectiondetails.component.css']
})
export class CollectiondetailsComponent implements OnInit {
  id = Number (this.route.snapshot.paramMap.get("id"));
  constructor(private route: ActivatedRoute) { }


 
  product:any [] = [
    {name:"Celebración Nyan Cat", imgSource:"https://html.modeltheme.com/enefti/assets/images/shop/enefti-shop-item-1.jpg", pirce:1.25, id:1,},
    {name:"Chimera #977", pirce: 1.04, imgSource:"https://html.modeltheme.com/enefti/assets/images/shop/enefti-shop-item-2.jpg", id:2,},
    {name:"Chimera #978", imgSource:"https://html.modeltheme.com/enefti/assets/images/shop/enefti-shop-item-3.jpg", pirce:402.48, id:3,},
    {name:"Chimera #979", imgSource:"https://html.modeltheme.com/enefti/assets/images/shop/enefti-shop-item-4.jpg", pirce:3.98, id:4,},
    {name:"Chimera #980", imgSource:"https://html.modeltheme.com/enefti/assets/images/shop/enefti-shop-item-5.jpg", pirce:2., id:5,},
    {name:"Coolman’s Universe #9944", imgSource:"https://html.modeltheme.com/enefti/assets/images/shop/enefti-shop-item-6.jpg", pirce:1.04, id:6,},
    {name:"Coolman’s Universe #9977", imgSource:"https://html.modeltheme.com/enefti/assets/images/shop/enefti-shop-item-7.jpg", pirce:0.89, id:7,},
    {name:"Coolman’s Universe #9997", imgSource:"https://html.modeltheme.com/enefti/assets/images/shop/enefti-shop-item-8.jpg", pirce:1.95,id:8,},
    {name:"Coolman’s Universe #9999", imgSource:"https://html.modeltheme.com/enefti/assets/images/shop/enefti-shop-item-9.jpg", pirce:1., id:9,}
  ]
    selectProduct: any;

  ngOnInit(): void {
    this.selectProduct = this.product.find((product: any) =>{
      return product.id == this.id 
    });
  }
}
