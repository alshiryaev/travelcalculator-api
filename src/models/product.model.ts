import {
  Column,
  DataType,
  HasOne,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Ingredient } from './ingredient.model';

@Table({
  timestamps: false,
  modelName: 'products',

})
export class Product extends Model<Product> {
  @IsUUID(4)
  @PrimaryKey
  @Column({ type: DataType.UUID })
  id: string;

  @Column({ type: DataType.STRING })
  name: string;

  @Column({ type: DataType.DOUBLE })
  proteins: number;

  @Column({ type: DataType.DOUBLE })
  fats: number;

  @Column({ type: DataType.DOUBLE })
  carbohydrates: number;

  @Column({ type: DataType.DOUBLE })
  calories: number;

  @HasOne(() => Ingredient)
  ingedient: Ingredient;
}
