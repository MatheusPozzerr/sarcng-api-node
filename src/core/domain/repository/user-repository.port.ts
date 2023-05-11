import { UserModelWhere } from "src/application/rest-api/user.controller";
import { User } from "../entity/user";

export interface UserRepositoryPort {
  getUsers(query: UserModelWhere): Promise<User[]>;
  getUser(id: number): Promise<User>;
  updateUser(payload: User, idUser: number): Promise<User>;
  postUser(payload: User): Promise<User>;
  deleteUser(id: number): Promise<User>;
}
