import {
  IsUUID,
  PrimaryKey,
  Column,
  DataType,
  Table,
  Model,
  BelongsToMany,
  AllowNull,
} from 'sequelize-typescript';
import { Food } from './food.model';
import { FoodTravelType } from './food-traveltypes.model';

@Table({
  timestamps: false,
})
export class TravelType extends Model<TravelType> {
  @IsUUID(4)
  @PrimaryKey
  @Column({ type: DataType.UUID })
  id: string;

  @Column({ type: DataType.STRING })
  name: string;

  @BelongsToMany(() => Food, () => FoodTravelType)
  foods: Food[];
}
