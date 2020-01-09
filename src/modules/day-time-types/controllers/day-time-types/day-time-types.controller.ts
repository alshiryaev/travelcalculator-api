import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DayTimeTypeRepository } from '../../repositories/day-time-type/day-time-type.repository';

@Controller('day-time-types')
@ApiTags('day-time-types')
export class DayTimeTypesController {

  constructor(private readonly dayTimeTypeRepository: DayTimeTypeRepository) {

  }

  @Get()
  getDayTimeTypes() {
    return this.dayTimeTypeRepository.getDayTimeTypes();
  }

}
