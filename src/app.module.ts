import { Module } from "@nestjs/common";
import { HelloModule } from "./application/di/hello.module";
import { UserModule } from "./application/di/user/user.module";
import { DatabaseModule } from "./core/database/database.module";

@Module({
  imports: [DatabaseModule, HelloModule, UserModule],
})
export class AppModule {}
