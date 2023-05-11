import { UserDto } from "src/core/service/user/dto/user.dto";

export interface DeleteUserUsecase {
  deleteUserById(id: number): Promise<UserDto>;
}
