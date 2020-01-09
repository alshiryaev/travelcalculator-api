import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TravelTypeRepository } from '../repositories/travel-type.repository';

@Controller('traveltypes')
@ApiTags('Traveltypes')
export class TravelTypesController {

  constructor(private readonly travelTypeRepository: TravelTypeRepository) {
  }

  @Get()
  getAllTravelTypes() {
    return this.travelTypeRepository.getTravelTypes();
  }

}
