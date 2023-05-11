import { UserModelWhere } from "src/application/rest-api/user.controller";
import { UserDto } from "src/core/service/user/dto/user.dto";

export interface GetAllUsersUsecase {
  getAllUsers(query: UserModelWhere): Promise<UserDto[]>;
}
