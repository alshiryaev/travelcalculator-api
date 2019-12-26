import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductsRepository } from '../repositories/products.repository';

@Controller('products')
@ApiTags('Products')
export class ProductController {


  constructor(private readonly productsRepository: ProductsRepository) {

  }

  @Get()
  getProducts(@Query('filter') filter = '') {
   console.log('filter = ', filter);
   return this.productsRepository.getProducts(filter);
  }

}