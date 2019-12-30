import { Column, DataType, IsUUID, Model, PrimaryKey, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Food } from './food.model';

export class Recipe extends Model<Recipe> {
  @IsUUID(4)
  @PrimaryKey
  @Column({ type: DataType.UUID })
  id: string;

  @Column({type: DataType.STRING})
  name: string;

  @Column({type: DataType.TEXT})
  description: string;

  @ForeignKey(() => Food)
  @Column({ type: DataType.UUID })
  foodId: string;

  @BelongsTo(() => Food)
  food: Food;
}