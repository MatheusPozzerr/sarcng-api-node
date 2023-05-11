import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { UserRepositoryPortDI } from "src/application/di/user/user.token";
import { UserRepositoryPort } from "../../domain/hello/port/repository/user-repository.port";
import { UserDto } from "../dto/user.dto";
import { User } from "../../domain/hello/entity/user";
import { PutUserUsecase } from "src/core/domain/hello/usecase/user/put-user.usecase";

@Injectable()
export class PutUserService implements PutUserUsecase {
  constructor(
    @Inject(UserRepositoryPortDI)
    private readonly userRepository: UserRepositoryPort,
  ) {}

  public async updateUser(payload: User, userId: number): Promise<UserDto> {
    return await this.userRepository
      .updateUser(payload, userId)
      .then((user) => {
        return new UserDto(user);
      })
      .catch((error) => {
        throw new HttpException(
          error.options.cause.message,
          HttpStatus.BAD_REQUEST,
        );
      });
  }
}
