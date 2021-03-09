import { Controller, Get } from '@nestjs/common';
import { User } from './models/user.entity';
import { UsersService } from './users.service';
import { Repository } from 'typeorm';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(): string {
    return this.usersService.findAll();
  }
}
