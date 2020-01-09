import { Injectable } from '@nestjs/common';
import { DayTimeType } from '../../../models/daytime-type.model';

@Injectable()
export class DayTimeTypeRepository {

  getDayTimeTypes(): Promise<any> {
    return DayTimeType.findAll();
  }

}
