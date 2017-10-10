import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  private products: Object[] = [];

  constructor(private _productService: ProductService) { }

  ngOnInit() {
      this._productService.getProducts()
      .subscribe(products => {
        this.products = products;
        console.log(products);
      }, error => { console.log('Error!')})
  }

}
