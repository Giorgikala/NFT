import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  id = Number(this.route.snapshot.paramMap.get('id'));
  constructor(private route: ActivatedRoute) {}

  nfts: any[] = [
    {
      name: 'Terra Nyan Cat',
      price: 0.592,
      imgSoruce:
        'https://html.modeltheme.com/enefti/assets/images/nfts/explore_nfts/all_nfts/an-nft1.jpg',
      id: 1,
    },
    {
      name: 'Nyantendo Nyan Cat',
      price: 1.59,
      imgSoruce:
        'https://html.modeltheme.com/enefti/assets/images/nfts/explore_nfts/all_nfts/an-nft2.jpg',
      id: 2,
    },
    {
      name: 'Demonic Nyan Cat',
      price: 0.39,
      imgSoruce:
        'https://html.modeltheme.com/enefti/assets/images/nfts/explore_nfts/all_nfts/an-nft3.jpg',
      id: 3,
    },
    {
      name: 'Fiesta Dog',
      price: 0.59,
      imgSoruce:
        'https://html.modeltheme.com/enefti/assets/images/nfts/explore_nfts/all_nfts/an-nft5.jpg',
      id: 4,
    },
    {
      name: 'Biker Nyan Cat',
      price: 0.03,
      imgSoruce:
        'https://html.modeltheme.com/enefti/assets/images/nfts/explore_nfts/all_nfts/an-nft7.jpg',
      id: 5,
    },
    {
      name: 'Star-Spangled Nyan Cat',
      price: 2.59,
      imgSoruce:
        'https://html.modeltheme.com/enefti/assets/images/nfts/explore_nfts/all_nfts/an-nft8.jpg',
      id: 6,
    },
    {
      name: 'Magical Nyan Cat',
      price: 0.09,
      imgSoruce:
        'https://html.modeltheme.com/enefti/assets/images/nfts/explore_nfts/all_nfts/an-nft1.jpg',
      id: 7,
    },
    {
      name: 'Biker Nyan Cat',
      price: 0.03,
      imgSoruce:
        'https://html.modeltheme.com/enefti/assets/images/nfts/explore_nfts/all_nfts/an-nft7.jpg',
      id: 8,
    },
  ];

  selectedNft: any;
  hottesImg: any[] = [
    {
      name: 'Avidlines #349831649',
      price: 402.48,
      imgSoruce:
        'https://html.modeltheme.com/enefti/assets/images/nfts/hottest_bids/hb-nft1.jpg',
      id: 1,
    },
    {
      name: 'Azuki #9990',
      price: 19.8,
      imgSoruce:
        'https://html.modeltheme.com/enefti/assets/images/nfts/hottest_bids/hb-nft2.jpg',
      id: 2,
    },
    {
      name: 'FoxFam #9996',
      price: 402.48,
      imgSoruce:
        'https://html.modeltheme.com/enefti/assets/images/nfts/hottest_bids/hb-nft3.jpg',
      id: 3,
    },
    {
      name: 'Lucky Zero #3332',
      price: 402.48,
      imgSoruce:
        'https://html.modeltheme.com/enefti/assets/images/nfts/hottest_bids/hb-nft4.jpg',
      id: 4,
    },
  ];

  queryParameter: any;
  hottestSelectedimg: any;

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.queryParameter = params['selected'];
    });
   

    if (this.queryParameter == 'nft') {
      this.selectedNft = this.nfts.find((nft: any) => {
        return nft.id == this.id;
      });
    } else if (this.queryParameter == 'hottest') {
      this.selectedNft = this.hottesImg.find((icon: any) => {
        return icon.id == this.id;
      });
    }
  }
}
