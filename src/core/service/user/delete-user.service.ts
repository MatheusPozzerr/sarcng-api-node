import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { UserRepositoryPortDI } from "src/application/di/user/user.token";
import { UserDto } from "./dto/user.dto";
import { DeleteUserUsecase } from "src/core/domain/usecase/user/delete-user.usecase";
import { UserRepositoryPort } from "src/core/domain/repository/user-repository.port";

@Injectable()
export class DeleteUserService implements DeleteUserUsecase {
  constructor(
    @Inject(UserRepositoryPortDI)
    private readonly userRepository: UserRepositoryPort,
  ) {}

  public async deleteUserById(id: number): Promise<UserDto> {
    return await this.userRepository
      .deleteUser(id)
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
