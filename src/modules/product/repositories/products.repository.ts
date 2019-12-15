import { Injectable } from '@nestjs/common';
import { Product } from '../../../models/product.model';

@Injectable()
export class ProductsRepository {

  async getProducts() {    
    return await Product.findAll();
  }

} 