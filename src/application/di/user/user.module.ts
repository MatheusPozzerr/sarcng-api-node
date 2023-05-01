import { Module } from "@nestjs/common";
import { GetUserUsecaseDI, UserRepositoryPortDI, UserRepository, PostUserUsecaseDI, GetAllUsersUsecaseDi, DeleteUserUsecaseDi, UpdateUserUsecaseDi } from "./user.token";
import { SequelizeUserRepositoryAdapter } from "src/infrastructure/adapter/persistence/SequelizeUserRepositoryAdapter";
import { UserController } from "src/application/rest-api/user.controller";
import { GetUserService } from "src/core/service/user/get-user.service";
import { UserModel } from "src/infrastructure/db/models/user.model";
import { PostUserService } from "src/core/service/user/post-user.service";
import { GetAllUsersService } from "src/core/service/user/get-all-users.service";
import { DeleteUserService } from "src/core/service/user/delete-user.service";
import { PutUserService } from "src/core/service/user/put-user.service";

const repositoryProviders = [
  {
    provide: UserRepositoryPortDI,
    useFactory: (repository) => new SequelizeUserRepositoryAdapter(repository),
    inject: [UserRepository],
  },
];

export const userRepositoryProviders = [
  {
      provide: UserRepository,
      useValue: UserModel,
  },
];

const useCaseProviders = [
  {
    provide: GetUserUsecaseDI,
    useFactory: (repository) => new GetUserService(repository),
    inject: [UserRepositoryPortDI],
  },
  {
    provide: PostUserUsecaseDI,
    useFactory: (repository) => new PostUserService(repository),
    inject: [UserRepositoryPortDI],
  },
  {
    provide: GetAllUsersUsecaseDi,
    useFactory: (repository) => new GetAllUsersService(repository),
    inject: [UserRepositoryPortDI],
  },
  {
    provide: DeleteUserUsecaseDi,
    useFactory: (repository) => new DeleteUserService(repository),
    inject: [UserRepositoryPortDI],
  },
  {
    provide: UpdateUserUsecaseDi,
    useFactory: (repository) => new PutUserService(repository),
    inject: [UserRepositoryPortDI],
  },
];

@Module({
  imports: [],
  controllers: [UserController],
  providers: [...userRepositoryProviders, ...repositoryProviders, ...useCaseProviders],
})
export class UserModule {}
