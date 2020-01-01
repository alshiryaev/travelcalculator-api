import { Module } from '@nestjs/common';
import { ProductController } from './controllers/products.controller';
import { ProductsRepository } from './repositories/products.repository';

@Module({
  controllers: [ProductController],
  providers: [ProductsRepository],
})
export class ProductModule {}
