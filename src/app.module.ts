/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { UserModule } from "./application/di/user/user.module";
import { SubjectModule } from "./application/di/subject/subject.module";
import { DatabaseModule } from "./infrastructure/database-configs/database.module";

@Module({
  imports: [DatabaseModule, UserModule, SubjectModule],
})
export class AppModule {}
