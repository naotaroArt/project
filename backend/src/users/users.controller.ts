import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './users.model';

@ApiTags('Users')
@Controller('users')
export class UsersController {

  constructor(private userService: UsersService) {}

  @ApiOperation({summary: 'Создание пользователя'})
  @ApiResponse({status:200, type: User})
  @Post()
  create(@Body() userDto: CreatUserDto) {
    return this.userService.creatUser(userDto);
  }

  @ApiOperation({summary: 'Получение всех пользователей'})
  @ApiResponse({status:200, type: [User]})
  @Get()
  getAll() {
    return this.userService.getAllUsers();
  }
}
