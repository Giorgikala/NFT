import { Component, OnInit } from '@angular/core';
import { ActivationEnd } from '@angular/router';
import { NftTypeEnum } from './nft-type.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nftFilteredBy: NftTypeEnum = NftTypeEnum.Nofilter;

  nfts: any[] = [
    { name: "Terra Nyan Cat", price: 0.592, imgSoruce: "https://html.modeltheme.com/enefti/assets/images/nfts/explore_nfts/all_nfts/an-nft1.jpg", id: 2, Seller: "seller", type: NftTypeEnum.SaleType },
    { name: "Nyantendo Nyan Cat", price: 1.59, imgSoruce: "https://html.modeltheme.com/enefti/assets/images/nfts/explore_nfts/all_nfts/an-nft2.jpg", id: 2, type: NftTypeEnum.SaleType },
    { name: "Demonic Nyan Cat", price: 0.39, imgSoruce: "https://html.modeltheme.com/enefti/assets/images/nfts/explore_nfts/all_nfts/an-nft3.jpg", id: 2, type: NftTypeEnum.SaleType },
    { name: "Fiesta Dog", price: 0.59, imgSoruce: "https://html.modeltheme.com/enefti/assets/images/nfts/explore_nfts/all_nfts/an-nft5.jpg", id: 1, type: NftTypeEnum.FixedPrice },
    { name: "Biker Nyan Cat", price: 0.03, imgSoruce: "https://html.modeltheme.com/enefti/assets/images/nfts/explore_nfts/all_nfts/an-nft7.jpg", id: 1, type: NftTypeEnum.FixedPrice },
    { name: "Star-Spangled Nyan Cat", price: 2.59, imgSoruce: "https://html.modeltheme.com/enefti/assets/images/nfts/explore_nfts/all_nfts/an-nft8.jpg", id: 1, type: NftTypeEnum.FixedPrice },
    { name: "Magical Nyan Cat", price: 0.09, imgSoruce: "https://html.modeltheme.com/enefti/assets/images/nfts/explore_nfts/all_nfts/an-nft1.jpg", id: 3, type: NftTypeEnum.FixedPrice },
    { name: "Biker Nyan Cat", price: 0.03, imgSoruce: "https://html.modeltheme.com/enefti/assets/images/nfts/explore_nfts/all_nfts/an-nft7.jpg", id: 3, type: NftTypeEnum.FixedPrice }
  ]

  filteredCollection: any = [];

  profileIcon: any[] =
    [
      { name: "Phantabear", immgSource: "https://html.modeltheme.com/enefti/assets/images/collectors/cl-avatar1.jpg", id: 1, items: 7, },
      { name: "Doodles", immgSource: "https://html.modeltheme.com/enefti/assets/images/collectors/cl-avatar2.jpg", id: 2, items: 12, },
      { name: "FoxFam", immgSource: "https://html.modeltheme.com/enefti/assets/images/collectors/cl-avatar3.jpg", id: 3, items: 18, },
      { name: "Avid Lines", immgSource: "https://html.modeltheme.com/enefti/assets/images/collectors/cl-avatar4.jpg", id: 4, items: 6, },
      { name: "Lucky Zeros", immgSource: "https://html.modeltheme.com/enefti/assets/images/collectors/cl-avatar5.jpg", id: 5, items: 4, },
      { name: "Azuki", immgSource: "https://html.modeltheme.com/enefti/assets/images/collectors/cl-avatar6.jpg", id: 6, items: 6, },
      { name: "Coolman's", immgSource: "https://html.modeltheme.com/enefti/assets/images/collectors/cl-avatar7.jpg", id: 7, items: 6, },
      { name: "Archetype", immgSource: "https://html.modeltheme.com/enefti/assets/images/collectors/cl-avatar8.jpg", id: 1, items: 8, }
    ]

  hottesImg: any[] = [
    { name: "Avidlines #349831649", price: 402.48, Img: "https://html.modeltheme.com/enefti/assets/images/nfts/hottest_bids/hb-nft1.jpg", id: 1 },
    { name: "Azuki #9990", price: 19.8, Img: "https://html.modeltheme.com/enefti/assets/images/nfts/hottest_bids/hb-nft2.jpg", id:2 },
    { name: "FoxFam #9996", price: 402.48, Img: "https://html.modeltheme.com/enefti/assets/images/nfts/hottest_bids/hb-nft3.jpg", id:3 },
    { name: "Lucky Zero #3332", price: 402.48, Img: "https://html.modeltheme.com/enefti/assets/images/nfts/hottest_bids/hb-nft4.jpg", id:4 }
  ]

  news: any[] = [
    { date: "27JAN, 2022 | 1 COMMENT", name: "7 New Insights You Should Know Metaverse", img: "https://html.modeltheme.com/enefti/assets/images/news/news-2.jpg", text: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of... " },
    { date: "24JAN, 2022 | 3 COMMENTS", name: "NFT Art Exists in the Digital World Collector", img: "https://html.modeltheme.com/enefti/assets/images/news/news-1.jpg", text: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of... " },
    { date: "23 JAN, 2022 | 1 COMMENT", name: "The good, the bad and the ugly about tokens", img: "https://html.modeltheme.com/enefti/assets/images/news/news-3.jpg", text: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of... " },
  ]

  constructor() {

  }
  

  FilterCollection(filterType: number, event: any){
   
    if(event !== null){
      let activeBtn = document.querySelector(".nftButton.active") as HTMLButtonElement
      activeBtn.classList.remove("active")
      event.target.classList.add("active");
    }
    

    if(filterType == NftTypeEnum.Nofilter){
      this.filteredCollection = this.nfts
    }
    else{
      this.filteredCollection = this.nfts.filter((nft) => {
        return nft.type == filterType;
      })
    }
    console.log(this.filteredCollection)
  }
  ngOnInit(): void {

this.FilterCollection(0,null);


  }



}
