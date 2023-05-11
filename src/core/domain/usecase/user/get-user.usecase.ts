import { UserDto } from "src/core/service/user/dto/user.dto";
import { User } from "../../entity/user";

export interface GetUserUsecase {
  getUserById(id: number): Promise<UserDto>;
}
