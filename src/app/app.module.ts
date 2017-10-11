import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
//import { ProductListComponent } from './products/product-list/product-list.component';
//import { ProductService } from './products/product.service';
import { routes } from './routes';
import { WelcomeComponent } from './home/welcome.component';
// import { ProductDetailComponent } from './products/product-detail/product-detail.component';
// import { ProductDetailGuardService } from './products/product-detail-guard.service';
// import { ProductPipe } from './products/product.pipe';
import { ProductModule } from './products/product.module';
import { AuthInterceptorService } from './auth-interceptor.service';
//import { StarComponent } from './shared/star.component';
//import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
    //StarComponent
  ],
  imports: [
    BrowserModule,
    //HttpClientModule,
    //FormsModule,
    //RouterModule.forRoot(routes, { useHash: true })
    RouterModule.forRoot(routes),
    ProductModule
   // SharedModule
  ],
  providers: [HttpClient,
              {provide: HTTP_INTERCEPTORS, 
               useClass: AuthInterceptorService,
               multi: true} 
             ],
  bootstrap: [AppComponent]
  //bootstrap: [ProductListComponent]
})
export class AppModule { }
