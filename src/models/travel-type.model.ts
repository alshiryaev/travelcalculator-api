import { BelongsToMany, Column, DataType, IsUUID, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { FoodTravelType } from './food-traveltypes.model';
import { Food } from './food.model';

@Table({
  timestamps: false,
  modelName: 'travelTypes'
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
