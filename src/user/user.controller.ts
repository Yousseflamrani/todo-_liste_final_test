import {
    Body,
    Controller,
    HttpException,
    HttpStatus,
    Post,
} from '@nestjs/common';
import type { UserService } from './user.service';
import type { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        const { email } = createUserDto;

        if (!this.validateEmail(email)) {
            throw new HttpException('Invalid email', HttpStatus.BAD_REQUEST);
        }

        const existingUser = await this.userService.getUser(email);
        if (existingUser) {
            throw new HttpException('User already exists', HttpStatus.CONFLICT);
        }

        await this.userService.addUser(email);
        return { statusCode: HttpStatus.CREATED };
    }

    private validateEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}
