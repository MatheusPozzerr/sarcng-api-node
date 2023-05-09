import { UserDto } from "src/core/service/dto/user.dto";
import { User } from "../../entity/user";

export interface PutUserUsecase {
  updateUser(payload: User, idUser: number): Promise<UserDto>;
}
