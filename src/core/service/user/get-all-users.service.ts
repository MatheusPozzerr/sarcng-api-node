import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { UserRepositoryPortDI } from "src/application/di/user/user.token";
import { UserRepositoryPort } from "../../domain/hello/port/repository/user-repository.port";
import { UserDto } from "../dto/user.dto";
import { GetAllUsersUsecase } from "src/core/domain/hello/usecase/user/get-all-users.usecase";
import { UserModelWhere } from "src/application/rest-api/user.controller";

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
