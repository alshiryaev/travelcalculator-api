import { Controller, Get, Query } from '@nestjs/common';
import { ProductsRepository } from '../repositories/products.repository';

@Controller('products')
export class ProductController {


  constructor(private readonly productsRepository: ProductsRepository) {

  }

  @Get()
  getProducts(@Query('filter') filter = '') {
   console.log('filter = ', filter);
   return this.productsRepository.getProducts(filter);
  }

}