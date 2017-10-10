import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../product.service';
import { Observable } from 'rxjs/Observable';
import { IProduct } from '../product-list/product';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  errorMessage: string;
  product: IProduct;
  private id: number;

  constructor(private _route: ActivatedRoute, 
              private _productService: ProductService) { }

  ngOnInit() {
     this.id = +this._route.snapshot.paramMap.get('id'); //'+' for pass to number
     this.getProduct();
  }
  getProduct(){
    this._productService.getProduct(this.id).subscribe(
      product => this.product = product
      ,error => this.errorMessage = <any>error
    );
  }
}
