import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { DayTimeTypesModule } from './modules/day-time-types/day-time-types.module';
import { ProductModule } from './modules/product/product.module';
import { TravelTypesModule } from './modules/travel-types/travel-types.module';

@Module({
  imports: [AuthModule, ProductModule, DayTimeTypesModule, TravelTypesModule],
})
export class AppModule {}
