import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './product.service';
import { routes } from './routes';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    WelcomeComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //RouterModule.forRoot(routes, { useHash: true })
    RouterModule.forRoot(routes)
  ],
  providers: [HttpClient, ProductService],
  bootstrap: [AppComponent]
  //bootstrap: [ProductListComponent]
})
export class AppModule { }
