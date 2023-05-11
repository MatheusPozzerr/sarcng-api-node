/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { UserModel } from "src/infrastructure/db/user/user.model";

export enum GenderTypes {
  MALE = "Masculino",
  FEMALE = "Feminino",
  OTHER = "Outro",
}

export class User {
  @ApiProperty({ name: "id" })
  private _id?: number;
  @ApiProperty({ name: "age" })
  private _age: number;
  @ApiProperty({ name: "name" })
  private _name: string;
  @ApiProperty({ name: "email" })
  private _email: string;
  @ApiProperty({ name: "dateOfBirth" })
  private _dateOfBirth: Date;
  @ApiProperty({ name: "gender", enum: GenderTypes })
  private _gender: string;
  @ApiProperty({ name: "phone" })
  private _phone: string;
  @ApiProperty({ name: "password" })
  private _password: string;

  constructor(user: UserModel) {
    this._id = user?.id;
    this._name = user.name;
    this._age = user.age;
    this._email = user.email;
    this._dateOfBirth = user.dateOfBirth;
    this._gender = user.gender;
    this._phone = user?.phone;
    this._password = user.password;
  }

  get id() {
    return this._id;
  }

  get age() {
    return this._age;
  }

  get name() {
    return this._name;
  }

  get email() {
    return this._email;
  }

  get dateOfBirth() {
    return this._dateOfBirth;
  }

  get gender() {
    return this._gender;
  }

  get phone() {
    return this._phone;
  }
}
