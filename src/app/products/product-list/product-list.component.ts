import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';
import { Observable } from 'rxjs/Observable';

//import * as _ from 'lodash';  //load all
import { remove } from 'lodash';
import { IProduct } from './product';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  private products: Object[] = [];
  private asyncProducts: Observable<Object[]>;
  private txtFilter: string;

  constructor(private _productService: ProductService) { }

  ngOnInit() {
      // this._productService.getProducts()
      // .subscribe(products => {
      //   this.products = products;
      //   //debugger;
      //   console.log(products);
      // }, error => { console.log('Error!')})

     this.asyncProducts = this._productService.getProducts();
     this.asyncProducts.subscribe(products => {
        this.products = products;
        //debugger;
        console.log(products);
      }, error => { console.log('Error!')});
     
  }
  doRemove(id: number){
    console.log('remove : ' + id);
    console.log(remove);
    remove(this.products,function(product: IProduct){
      return (product.productId == id)
    });
    console.log(this.products);
  }
}
