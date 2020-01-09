import { Module } from '@nestjs/common';
import { DayTimeTypesController } from './controllers/day-time-types/day-time-types.controller';
import { DayTimeTypeRepository } from './repositories/day-time-type/day-time-type.repository';

@Module({
  controllers: [DayTimeTypesController],
  providers: [DayTimeTypeRepository]
})
export class DayTimeTypesModule {}
