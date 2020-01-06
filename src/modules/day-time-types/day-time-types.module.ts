import { Module } from '@nestjs/common';
import { DayTimeTypesController } from './controllers/day-time-types/day-time-types.controller';

@Module({
  controllers: [DayTimeTypesController]
})
export class DayTimeTypesModule {}
