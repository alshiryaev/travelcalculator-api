import { FoodDayTime } from './food-daytimes.model';
import { Food } from './food.model';
import {
  Column,
  DataType,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
  BelongsToMany,
} from 'sequelize-typescript';

@Table({
  timestamps: false,
  modelName: 'dayTimeTypes'
})
export class DayTimeType extends Model<DayTimeType> {
  @IsUUID(4)
  @PrimaryKey
  @Column({ type: DataType.UUID })
  id: string;

  @Column({ type: DataType.STRING })
  name: string;

  @BelongsToMany(() => Food, () => FoodDayTime)
  foods: Food[];
}
