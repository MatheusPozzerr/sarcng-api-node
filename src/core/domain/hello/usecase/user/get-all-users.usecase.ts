import { UserModelWhere } from "src/application/rest-api/user.controller";
import { UserDto } from "src/core/service/dto/user.dto";

export interface GetAllUsersUsecase {
    getAllUsers(query: UserModelWhere): Promise<UserDto[]>;
}
  