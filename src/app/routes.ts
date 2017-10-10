import { ProductListComponent } from "./product-list/product-list.component";
import { WelcomeComponent } from "./home/welcome.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

export const routes = [
    { path: 'welcome', component: WelcomeComponent},
    { path: 'products', component: ProductListComponent},
    { path: 'product/:id', component: ProductDetailComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' } 
   // { path: '**', component: PageNotFoundComponent}    
];