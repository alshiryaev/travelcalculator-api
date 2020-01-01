import {
  IsUUID,
  PrimaryKey,
  Column,
  DataType,
  ForeignKey,
  Table,
  Model,
  AllowNull,
} from 'sequelize-typescript';
import { Food } from './food.model';
import { DayTimeType } from './daytime-type.model';

@Table({
  timestamps: false,
  modelName: 'foodDayTimeTypes',
})
export class FoodDayTime extends Model<FoodDayTime> {
  @AllowNull(false)
  @IsUUID(4)
  @PrimaryKey
  @Column({ type: DataType.UUID })
  id: string;

  @AllowNull(false)
  @ForeignKey(() => Food)
  @Column({ type: DataType.UUID })
  foodId: string;

  @AllowNull(false)
  @ForeignKey(() => DayTimeType)
  @Column({ type: DataType.UUID })
  dayTimeTypeId: string;
}
