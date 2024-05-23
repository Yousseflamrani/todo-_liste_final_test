import {
    Body,
    Controller,
    Get,
    HttpException,
    HttpStatus,
    Param,
    Post,
} from '@nestjs/common';
import type { CreateTaskDto } from './dto/create-task.dto';
import type { TaskService } from './task.service';
import { validate as isUUID } from 'uuid';

@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    @Get('user/:userId')
    async getUserTasks(@Param('userId') userId: string) {
        if (!isUUID(userId)) {
            throw new HttpException('Invalid userId', HttpStatus.BAD_REQUEST);
        }

        const tasks = await this.taskService.getUserTasks(userId);
        return tasks;
    }

    @Post()
    async create(@Body() createTaskDto: CreateTaskDto) {
        const { name, userId, priority } = createTaskDto;

        if (
            !name ||
            !isUUID(userId) ||
            isNaN(Number(priority)) ||
            priority <= 0
        ) {
            throw new HttpException(
                'Invalid task data',
                HttpStatus.BAD_REQUEST,
            );
        }

        await this.taskService.addTask(name, userId, priority);
        return { statusCode: HttpStatus.CREATED };
    }
}
