import { Controller, Get } from '@nestjs/common';
import { User } from './models/user.entity';
import { UsersService } from './users.service';
import { Repository } from 'typeorm';
import { UserDto } from './dto/response/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(): Promise<Array<UserDto>> {
    return this.usersService.findAll();
  }
}
