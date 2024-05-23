import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../infrastructure/database/database.service';
import { Task } from '@prisma/client';

@Injectable()
export class TaskService {
    constructor(private prisma: DatabaseService) {}

    async getUserTasks(userId: string): Promise<Task[]> {
        return this.prisma.task.findMany({ where: { userId } });
    }

    async addTask(
        name: string,
        userId: string,
        priority: number,
    ): Promise<Task> {
        return this.prisma.task.create({ data: { name, userId, priority } });
    }

    async resetData(): Promise<void> {
        await this.prisma.task.deleteMany({});
    }

    async getTaskByName(name: string): Promise<Task | null> {
        return this.prisma.task.findFirst({ where: { name } });
    }
}
