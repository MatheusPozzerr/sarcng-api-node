import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { UserRepositoryPortDI } from "src/application/di/user/user.token";
import { UserDto } from "./dto/user.dto";
import { PostUserUsecase } from "src/core/domain/usecase/user/post-user.usecase";
import { User } from "src/core/domain/entity/user";
import { UserRepositoryPort } from "src/core/domain/repository/user-repository.port";

@Injectable()
export class PostUserService implements PostUserUsecase {
  constructor(
    @Inject(UserRepositoryPortDI)
    private readonly userRepository: UserRepositoryPort,
  ) {}

  public async createUser(payload: User): Promise<UserDto> {
    return await this.userRepository
      .postUser(payload)
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
