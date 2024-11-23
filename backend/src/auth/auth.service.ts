import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreatUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs';
import { User } from 'src/users/users.model';
import { response } from 'express';

@Injectable()
export class AuthService {
  
  constructor(private usersService: UsersService,
              private jwtService: JwtService
  ) {}
  
  async login(userDto: CreatUserDto){
    const user = await this.validateUser(userDto);
    return this.generateToken(user);
  }

  async registration(userDto: CreatUserDto){
    const candidate = await this.usersService.getUserByEmail(userDto.email);
    if(candidate) {
      throw new HttpException('Пользователь с таким email уже существует', HttpStatus.BAD_REQUEST);
    }
    const hashPassword = await bcrypt.hash(userDto.password, 5);
    const user = await this.usersService.creatUser({...userDto, password: hashPassword});
    return this.generateToken(user)
  }

  private async generateToken(user: User) {
    const payload = {email: user.email, id: user.id, roles: user.roles};
    return {
      token: this.jwtService.sign(payload)
    }
  }

  private async validateUser(userDto: CreatUserDto){
    const user = await this.usersService.getUserByEmail(userDto.email);
    const passwordEquals = await bcrypt.compare(userDto.password, user.password);
    if(user && passwordEquals){
      return user;
    }
    throw new UnauthorizedException({response: 'Некорректный email или пароль'});
  }
}
