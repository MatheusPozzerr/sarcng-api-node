/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { HelloModule } from "./application/di/hello.module";
import { UserModule } from "./application/di/user/user.module";
import { SubjectModule } from "./application/di/subject/subject.module";
import { DatabaseModule } from "./core/database/database.module";

@Module({
  imports: [DatabaseModule, HelloModule, UserModule, SubjectModule],
})
export class AppModule {}
