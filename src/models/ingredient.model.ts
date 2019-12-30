import {
  Column,
  DataType,
  HasOne,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Product } from './product.model';
import { Food } from './food.model';

@Table({
  timestamps: false,
})
export class Ingredient extends Model<Ingredient> {
  @IsUUID(4)
  @PrimaryKey
  @Column({ type: DataType.UUID })
  id: string;

  @Column({ type: DataType.INTEGER })
  quantity: number;

  @Column({ type: DataType.UUID })
  @ForeignKey(() => Food)
  foodId: string;

  @BelongsTo(() => Food)
  food: Food;

  @Column({ type: DataType.UUID })
  @ForeignKey(() => Product)
  productId: string;

  @BelongsTo(() => Product)
  product: Product;
}
