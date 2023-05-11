import { HttpException, HttpStatus, Inject } from "@nestjs/common";
import { UserModel } from "src/infrastructure/db/user/user.model";
import { UserRepository } from "src/application/di/user/user.token";
import { modelToJson } from "src/infrastructure/db/utils/function";
import { UserModelWhere } from "src/application/rest-api/user.controller";
import { UserRepositoryPort } from "src/core/domain/repository/user-repository.port";
import { User } from "src/core/domain/entity/user";

export class SequelizeUserRepositoryAdapter implements UserRepositoryPort {
  constructor(
    @Inject(UserRepository) private readonly userRepository: typeof UserModel,
  ) {}

  async getUser(id: number): Promise<User> {
    return await this.userRepository
      .findOne<UserModel>({ where: { id } })
      .then((user) => {
        if (user !== null) {
          return new User(modelToJson(user));
        } else {
          throw new HttpException(
            "Usuario por este Id nao encontrado",
            HttpStatus.BAD_REQUEST,
          );
        }
      })
      .catch((error) => {
        throw new HttpException(
          "Parametros invalidos, ou incompletos",
          HttpStatus.BAD_REQUEST,
          { cause: error },
        );
      });
  }

  async postUser(payload: User): Promise<User> {
    return await this.userRepository
      .create<UserModel>(payload)
      .then((user) => {
        return new User(modelToJson(user));
      })
      .catch((error) => {
        throw new HttpException(
          "Parametros invalidos, ou incompletos",
          HttpStatus.BAD_REQUEST,
          { cause: error },
        );
      });
  }

  async getUsers(query: UserModelWhere): Promise<User[]> {
    return await this.userRepository
      .findAll<UserModel>({
        where: {
          ...query,
        },
      })
      .then((users) => {
        const transformedUsers: User[] = [];
        users.forEach((user) => {
          transformedUsers.push(new User(modelToJson(user)));
        });
        return transformedUsers;
      })
      .catch((error) => {
        throw new HttpException(
          "Parametros invalidos, ou incompletos",
          HttpStatus.BAD_REQUEST,
          { cause: error },
        );
      });
  }

  async deleteUser(id: number): Promise<User> {
    return await this.userRepository
      .findByPk<UserModel>(id)
      .then((user) => {
        if (user !== null) {
          return user.destroy().then((_) => {
            return new User(modelToJson(user));
          });
        } else {
          throw new HttpException(
            "Usuario por este Id nao encontrado",
            HttpStatus.BAD_REQUEST,
          );
        }
      })
      .catch((error) => {
        throw new HttpException(
          "Parametros invalidos, ou incompletos",
          HttpStatus.BAD_REQUEST,
          { cause: error },
        );
      });
  }

  async updateUser(payload: User, idUser: number): Promise<User> {
    return await this.userRepository
      .findByPk<UserModel>(idUser)
      .then((user) => {
        if (user == null) {
          throw new HttpException(
            "Usuario por este Id nao encontrado",
            HttpStatus.BAD_REQUEST,
          );
        } else {
          return user.update(payload).then((_) => {
            return new User(modelToJson(user));
          });
        }
      })
      .catch((error) => {
        throw new HttpException(
          "Parametros invalidos, ou incompletos",
          HttpStatus.BAD_REQUEST,
          { cause: error },
        );
      });
  }
}
