import {
  IsUUID,
  PrimaryKey,
  Column,
  DataType,
  ForeignKey,
  Table,
  Model,
} from 'sequelize-typescript';
import { Food } from './food.model';
import { TravelType } from './travel-type.model';

@Table({
  timestamps: false,
})
export class FoodTravelType extends Model<FoodTravelType> {
  @IsUUID(4)
  @PrimaryKey
  @Column({ type: DataType.UUID })
  id: string;

  @Column({ type: DataType.UUID })
  @ForeignKey(() => Food)
  foodId: string;

  @Column({ type: DataType.UUID })
  @ForeignKey(() => TravelType)
  travelTypeId: string;
}
