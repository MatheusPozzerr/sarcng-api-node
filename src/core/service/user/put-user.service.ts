import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { UserRepositoryPortDI } from "src/application/di/user/user.token";
import { UserDto } from "./dto/user.dto";
import { PutUserUsecase } from "src/core/domain/usecase/user/put-user.usecase";
import { UserRepositoryPort } from "src/core/domain/repository/user-repository.port";
import { User } from "src/core/domain/entity/user";

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
