import { UserModel } from "../models/user.model";
import { UserRepository } from "src/application/di/user/user.token";

export const usersProviders = [
  {
    provide: UserRepository,
    useValue: UserModel,
  },
];
