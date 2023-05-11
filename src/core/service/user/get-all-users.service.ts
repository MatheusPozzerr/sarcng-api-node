import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { UserRepositoryPortDI } from "src/application/di/user/user.token";
import { UserDto } from "./dto/user.dto";
import { GetAllUsersUsecase } from "src/core/domain/usecase/user/get-all-users.usecase";
import { UserModelWhere } from "src/application/rest-api/user.controller";
import { UserRepositoryPort } from "src/core/domain/repository/user-repository.port";

@Injectable()
export class GetAllUsersService implements GetAllUsersUsecase {
  constructor(
    @Inject(UserRepositoryPortDI)
    private readonly userRepository: UserRepositoryPort,
  ) {}

  public async getAllUsers(query: UserModelWhere): Promise<UserDto[]> {
    return await this.userRepository
      .getUsers(query)
      .then((users) => {
        const transformedUsers: UserDto[] = [];
        users.forEach((user) => {
          transformedUsers.push(new UserDto(user));
        });
        return transformedUsers;
      })
      .catch((error) => {
        throw new HttpException(
          error.options.cause.message,
          HttpStatus.BAD_REQUEST,
        );
      });
  }
}
