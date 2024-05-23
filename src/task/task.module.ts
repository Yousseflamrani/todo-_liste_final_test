import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { PrismaService } from '../infrastructure/database/database.service';

@Module({
    imports: [],
    providers: [TaskService, PrismaService],
    controllers: [TaskController],
    exports: [TaskService],
})
export class TaskModule {}
