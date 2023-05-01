import { UserModel } from "src/infrastructure/db/models/user.model";

export enum GenderTypes {
  MALE = 'Masculino',
  FEMALE = 'Feminino',
  OTHER = 'Outro'
}

export class User {
    private _id?: number;
    private _age: number;
    private _name: string;
    private _email: string;
    private _dateOfBirth: Date;
    private _gender: string;
    private _phone: string;
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
  