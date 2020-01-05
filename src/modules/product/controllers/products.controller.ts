import { Controller, Get, Query, Post, Body, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductsRepository } from '../repositories/products.repository';
import { Product } from 'src/models/product.model';

@Controller('products')
@ApiTags('Products')
export class ProductController {
  constructor(private readonly productsRepository: ProductsRepository) {}

  @Get()
  getProducts(@Query('filter') filter = '') {
    return this.productsRepository.getProducts(filter);
  }

  @Post()
  addProduct(@Body('product') product: any) {
    this.productsRepository.addProduct(product);
  }

  @Delete()
  deleteProduct(@Query('id') id: string) {
    this.productsRepository.deleteProduct(id);
  }
}
