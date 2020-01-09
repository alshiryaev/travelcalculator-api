import { Injectable } from '@nestjs/common';
import { TravelType } from '../../../models/travel-type.model';

@Injectable()
export class TravelTypeRepository {
  
  async getTravelTypes() {
    return TravelType.findAll();
  }
}
