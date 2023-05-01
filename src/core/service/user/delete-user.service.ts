import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { GetUserUsecase } from "../../domain/hello/usecase/user/get-user.usecase";
import { UserRepositoryPortDI } from "src/application/di/user/user.token";
import { UserRepositoryPort } from "../../domain/hello/port/repository/user-repository.port";
import { UserDto } from "../dto/user.dto";
import { DeleteUserUsecase } from "src/core/domain/hello/usecase/user/delete-user.usecase";

@Injectable()
export class DeleteUserService implements DeleteUserUsecase {
  constructor(
    @Inject(UserRepositoryPortDI)
    private readonly userRepository: UserRepositoryPort,
  ) {}

  public async deleteUserById(id: number): Promise<UserDto> {
    return await this.userRepository.deleteUser(id).then((user) => {
      return new UserDto(user);
    }).catch( (error) => {
      throw new HttpException(error.options.cause.message, HttpStatus.BAD_REQUEST);
    })
  }
}
