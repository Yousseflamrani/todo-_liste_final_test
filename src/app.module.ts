import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';
//import { PrismaModule } from './infrastructure/database/prisma.module';
import { DatabaseModule } from './infrastructure/database/database.module';

@Module({
    imports: [UserModule, TaskModule, DatabaseModule],
})
export class AppModule {}
