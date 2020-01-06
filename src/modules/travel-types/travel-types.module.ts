import { Module } from '@nestjs/common';
import { TravelTypesController } from './controllers/travel-types/travel-types.controller';

@Module({
  controllers: [TravelTypesController]
})
export class TravelTypesModule {}
