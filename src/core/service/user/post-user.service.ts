import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { UserRepositoryPortDI } from "src/application/di/user/user.token";
import { UserRepositoryPort } from "../../domain/hello/port/repository/user-repository.port";
import { UserDto } from "../dto/user.dto";
import { User } from "../../domain/hello/entity/user";
import { PostUserUsecase } from "src/core/domain/hello/usecase/user/post-user.usecase";

@Injectable()
export class PostUserService implements PostUserUsecase {
  constructor(
    @Inject(UserRepositoryPortDI)
    private readonly userRepository: UserRepositoryPort,
  ) {}

  public async createUser(payload: User): Promise<UserDto> {
    return await this.userRepository.postUser(payload).then((user) => {
      return new UserDto(user);
    }).catch( (error) => {
      throw new HttpException(error.options.cause.message, HttpStatus.BAD_REQUEST);
    })
  }
}
