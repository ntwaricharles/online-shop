import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ProductListComponent,
    ProductDetailComponent,
  ],
  imports: [CommonModule, MainRoutingModule],
})
export class MainContentModule {}
