/* eslint-disable prettier/prettier */
import {
  Table,
  Column,
  Model,
  DataType,
  AutoIncrement,
  PrimaryKey,
} from "sequelize-typescript";
import { Subject } from "src/core/domain/hello/entity/subject";

@Table
export class SubjectModel extends Model<Subject> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  schedule: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  credits: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  program: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  bibliographic_item: string;
}
