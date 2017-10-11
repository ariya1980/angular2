import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductPipe } from './product.pipe';
import { ProductService } from './product.service';
import { ProductDetailGuardService } from './product-detail-guard.service';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
//    CommonModule, //by sharedmodule
//    FormsModule, //by sharedmodule
    //RouterModule,
    SharedModule, 
    HttpClientModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent},
      { path: 'product/:id', canActivate: [ProductDetailGuardService] , component: ProductDetailComponent }
    ])
  ],
  exports:[
    HttpClientModule
  ],
  providers: [ ProductService, ProductDetailGuardService],
  declarations: [
    ProductDetailComponent,
    ProductListComponent,
    ProductPipe
  ]
})
export class ProductModule { }
