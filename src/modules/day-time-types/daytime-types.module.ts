import { Module } from '@nestjs/common';
import { DayTimeTypesController } from './controllers/daytime-types.controller';
import { DayTimeTypeRepository } from './repositories/daytime-type.repository';

@Module({
  controllers: [DayTimeTypesController],
  providers: [DayTimeTypeRepository]
})
export class DayTimeTypesModule {}
