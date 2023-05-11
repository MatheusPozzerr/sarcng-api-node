import { UserDto } from "src/core/service/dto/user.dto";
import { Injectable } from "@nestjs/common";
import { User } from "../../entity/user";

export interface PostUserUsecase {
  createUser(payload: User): Promise<UserDto>;
}
