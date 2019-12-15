import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { ProductModule } from './modules/product/product.module';

@Module({
  imports: [AuthModule, ProductModule]
})
export class AppModule { }
