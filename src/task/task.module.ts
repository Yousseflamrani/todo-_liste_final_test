import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { DatabaseService } from '../infrastructure/database/database.service';

@Module({
    imports: [],
    providers: [TaskService, DatabaseService],
    controllers: [TaskController],
    exports: [TaskService],
})
export class TaskModule {}
