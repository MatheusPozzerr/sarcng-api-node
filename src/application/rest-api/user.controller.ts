import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
  Query,
} from "@nestjs/common";
import {
  DeleteUserUsecaseDi,
  GetAllUsersUsecaseDi,
  GetUserUsecaseDI,
  PostUserUsecaseDI,
  UpdateUserUsecaseDi,
} from "../di/user/user.token";
import { GetUserUsecase } from "src/core/domain/hello/usecase/user/get-user.usecase";
import { UserDto } from "src/core/service/dto/user.dto";
import { GenderTypes, User } from "src/core/domain/hello/entity/user";
import { PostUserUsecase } from "src/core/domain/hello/usecase/user/post-user.usecase";
import { GetAllUsersUsecase } from "src/core/domain/hello/usecase/user/get-all-users.usecase";
import { DeleteUserUsecase } from "src/core/domain/hello/usecase/user/delete-user.usecase";
import { PutUserUsecase } from "src/core/domain/hello/usecase/user/put-user.usecase";
import { query } from "express";
import { ApiQuery } from "@nestjs/swagger";
import { type } from "os";

export interface UserModelWhere {
  name?: string;
  email?: number;
  gender?: number;
}

@Controller("user")
export class UserController {
  constructor(
    @Inject(GetUserUsecaseDI)
    private readonly getUserUsecase: GetUserUsecase,
    @Inject(PostUserUsecaseDI)
    private readonly postUserUsecase: PostUserUsecase,
    @Inject(GetAllUsersUsecaseDi)
    private readonly getAllUsersUsecase: GetAllUsersUsecase,
    @Inject(DeleteUserUsecaseDi)
    private readonly getUserDeleteUseCase: DeleteUserUsecase,
    @Inject(UpdateUserUsecaseDi)
    private readonly putUserUsecase: PutUserUsecase,
  ) {}

  @Get(":id")
  getUser(@Param("id") id: number): Promise<UserDto> {
    return this.getUserUsecase.getUserById(id);
  }

  @Delete(":id")
  delet(@Param("id") id: number): Promise<UserDto> {
    return this.getUserDeleteUseCase.deleteUserById(id);
  }

  @Post("")
  postUser(@Body() user: User): Promise<UserDto> {
    return this.postUserUsecase.createUser(user);
  }

  @Get("")
  @ApiQuery({ name: "gender", enum: GenderTypes })
  @ApiQuery({ name: "email" })
  @ApiQuery({ name: "name" })
  getAllUsers(@Query() query: UserModelWhere): Promise<UserDto[]> {
    return this.getAllUsersUsecase.getAllUsers(query);
  }

  @Put(":id")
  putUser(@Param("id") id: number, @Body() user: User): Promise<UserDto> {
    return this.putUserUsecase.updateUser(user, id);
  }
}
