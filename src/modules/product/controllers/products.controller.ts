import { Controller, Get } from '@nestjs/common';
import { ProductsRepository } from '../repositories/products.repository';

@Controller('products')
export class ProductController {


  constructor(private readonly productsRepository: ProductsRepository) {

  }

  @Get()
  getProducts() {
   return this.productsRepository.getProducts();
  }

}