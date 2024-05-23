import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DatabaseModule } from '../infrastructure/database/database.module';
import { DatabaseService } from '../infrastructure/database/database.service';

@Module({
    imports: [DatabaseModule, DatabaseService],
    providers: [UserService],
    controllers: [UserController],
    exports: [UserService],
})
export class UserModule {}
