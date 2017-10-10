import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product-list/product';

@Pipe({
  name: 'productFilter'
})
export class ProductPipe implements PipeTransform {

  transform(value: IProduct[], filterBy: string): IProduct[] {//value is input data
    console.log('ProductPipe');
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : '';
    if(!value) return value;
    return value.filter((product:IProduct) => product.productName.toLocaleLowerCase()
                          .indexOf(filterBy) !== -1
    );
  }

}
