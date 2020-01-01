import {
  Column,
  DataType,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
  HasMany,
} from 'sequelize-typescript';
import { Recipe } from './recipe.model';
import { Ingredient } from './ingredient.model';

@Table({
  timestamps: false,
})
export class Food extends Model<Food> {
  @IsUUID(4)
  @PrimaryKey
  @Column({ type: DataType.UUID })
  id: string;

  @Column(DataType.STRING)
  name: string;

  @HasMany(() => Recipe)
  recipe: Recipe;

  @HasMany(() => Ingredient)
  ingredient: Ingredient;
}
