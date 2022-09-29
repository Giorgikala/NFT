import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CollectiondetailsComponent } from './pages/collectiondetails/collectiondetails.component';
import { CollectionsComponent } from './pages/collections/collections.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CreatenftsComponent } from './pages/createnfts/createnfts.component';
import { DetailsComponent } from './pages/details/details.component';
import { DetailsshopComponent } from './pages/detailsshop/detailsshop.component';

import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ShopdetailsComponent } from './pages/shopdetails/shopdetails.component';
import { ShopshopComponent } from './pages/shopshop/shopshop.component';
import { SingleComponent } from './pages/single/single.component';
import { Singlep2Component } from './pages/singlep2/singlep2.component';
import { SinglepostComponent } from './pages/singlepost/singlepost.component';

const routes: Routes = [

  {path: "", component: HomeComponent},
  {path: "shop", component: ShopComponent},
  {path: "Single NFT", component: SingleComponent},
  {path: "Collections", component: CollectionsComponent},
  {path:"CreateNfts", component: CreatenftsComponent},
  {path: "shopshop", component: ShopshopComponent},
  {path: "singlep2", component: Singlep2Component},
  {path: "Blog", component: BlogComponent},
  {path: "Singlepost", component: SinglepostComponent},
  {path: "aboutus", component: AboutusComponent},
  {path: "Contact", component: ContactComponent},
  {path:"", component: NotFoundComponent},
  {path: "details/:id", component: DetailsComponent},
  {path: "shopdetails/:id", component: ShopdetailsComponent},
  {path: "collectiondetails/:id", component: CollectiondetailsComponent},
  {path: "detailsshop/:id", component: DetailsshopComponent},
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
