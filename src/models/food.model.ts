import { Column, DataType, IsUUID, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
  timestamps: false
})
export class Food extends Model<Food> {

  @IsUUID(4)
  @PrimaryKey
  @Column({ type: DataType.UUID })
  id: string;

  @Column(DataType.STRING)
  name: string;

}