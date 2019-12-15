import { Column, DataType, IsUUID, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
  timestamps: false
})
export class DayTimeTypes extends Model<DayTimeTypes> {

  @IsUUID(4)
  @PrimaryKey
  @Column({ type: DataType.UUID })
  id: string;

  @Column({ type: DataType.STRING })
  name: string;
}