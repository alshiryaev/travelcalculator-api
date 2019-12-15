import { Column, DataType, IsUUID, Model, PrimaryKey } from 'sequelize-typescript';

export class Recipe extends Model<Recipe> {
  @IsUUID(4)
  @PrimaryKey
  @Column({ type: DataType.UUID })
  id: string;

  @Column({type: DataType.STRING})
  name: string;

  @Column({type: DataType.TEXT})
  description: string;
}