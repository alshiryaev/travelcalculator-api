import { Module } from '@nestjs/common';
import { TravelTypesController } from './controllers/travel-types.controller';
import { TravelTypeRepository } from './repositories/travel-type.repository';

@Module({
  controllers: [TravelTypesController],
  providers: [TravelTypeRepository]
})
export class TravelTypesModule {}
