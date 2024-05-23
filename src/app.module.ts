import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';
import { DatabaseService } from './infrastructure/database/database.service';
import { DatabaseModule } from './infrastructure/database/database.module';

@Module({
    imports: [UserModule, TaskModule, DatabaseModule, DatabaseService],
})
export class AppModule {}
