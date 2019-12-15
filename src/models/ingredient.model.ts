import { Column, DataType, HasOne, IsUUID, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
  timestamps: false
})
export class Ingredient extends Model<Ingredient> {
  @IsUUID(4)
  @PrimaryKey
  @Column({ type: DataType.UUID })
  id: string;

  @Column({type: DataType.INTEGER})
  quantity: number;
}