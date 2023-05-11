import { UserDto } from "src/core/service/dto/user.dto";

export interface DeleteUserUsecase {
  deleteUserById(id: number): Promise<UserDto>;
}
