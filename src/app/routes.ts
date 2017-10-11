import { ProductListComponent } from "./products/product-list/product-list.component";
import { WelcomeComponent } from "./home/welcome.component";
import { ProductDetailComponent } from "./products/product-detail/product-detail.component";
import { ProductDetailGuardService } from "./products/product-detail-guard.service";

export const routes = [
    { path: 'welcome', component: WelcomeComponent},//component is class name
    //{ path: 'products', component: ProductListComponent},
    //{ path: 'product/:id', canActivate: [ProductDetailGuardService] , component: ProductDetailComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' } ,
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' } 
   // { path: '**', component: PageNotFoundComponent}    
];