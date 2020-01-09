import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DayTimeTypeRepository } from '../repositories/daytime-type.repository';

@Controller('daytimetypes')
@ApiTags('Daytime types')
export class DayTimeTypesController {

  constructor(private readonly dayTimeTypeRepository: DayTimeTypeRepository) {

  }

  @Get()
  getDayTimeTypes() {
    return this.dayTimeTypeRepository.getDayTimeTypes();
  }

}
