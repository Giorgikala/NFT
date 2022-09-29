import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SwiperSliderComponent } from './swiper-slider/swiper-slider.component';
import { ShopComponent } from './pages/shop/shop.component';
import { SingleComponent } from './pages/single/single.component';
import { CollectionsComponent } from './pages/collections/collections.component';
import { CreatenftsComponent } from './pages/createnfts/createnfts.component';
import { ShopshopComponent } from './pages/shopshop/shopshop.component';
import { Singlep2Component } from './pages/singlep2/singlep2.component';
import { BlogComponent } from './pages/blog/blog.component';
import { SinglepostComponent } from './pages/singlepost/singlepost.component';
import { SliderRangeComponent } from './utilis/slider-range/slider-range.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { SLIDERComponent } from './slider/slider.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DetailsComponent } from './pages/details/details.component';
import { ShopdetailsComponent } from './pages/shopdetails/shopdetails.component';
import { CollectiondetailsComponent } from './pages/collectiondetails/collectiondetails.component';
import { DetailsshopComponent } from './pages/detailsshop/detailsshop.component';






@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    SwiperSliderComponent,
    ShopComponent,
    SingleComponent,
    CollectionsComponent,
    CreatenftsComponent,
    ShopshopComponent,
    Singlep2Component,
    BlogComponent,
    SinglepostComponent,
    SliderRangeComponent,
    AboutusComponent,
    SLIDERComponent,
    ContactComponent,
    NotFoundComponent,
    DetailsComponent,
    ShopdetailsComponent,
    CollectiondetailsComponent,
    DetailsshopComponent

    
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
