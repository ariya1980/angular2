import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './product.service';
import { routes } from './routes';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDetailGuardService } from './product-detail-guard.service';
import { ProductPipe } from './product.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    WelcomeComponent,
    ProductDetailComponent,
    ProductPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    //RouterModule.forRoot(routes, { useHash: true })
    RouterModule.forRoot(routes)
  ],
  providers: [HttpClient, ProductService, ProductDetailGuardService],
  bootstrap: [AppComponent]
  //bootstrap: [ProductListComponent]
})
export class AppModule { }
