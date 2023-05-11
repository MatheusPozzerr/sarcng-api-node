import {
  Table,
  Column,
  Model,
  DataType,
  AutoIncrement,
  PrimaryKey,
} from "sequelize-typescript";
import { GenderTypes, User } from "src/core/domain/hello/entity/user";

@Table
export class UserModel extends Model<User> {
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
    type: DataType.INTEGER,
    allowNull: false,
  })
  age: number;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  dateOfBirth: Date;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;
  @Column({
    type: DataType.ENUM,
    values: ["Masculino", "Feminino", "Outro"],
    allowNull: false,
  })
  gender: string;
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  phone: string;
}
