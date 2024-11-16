import { ApiProperty } from "@nestjs/swagger";

export class CreatUserDto {
  @ApiProperty({example: 'test@mail.ru', description: 'Почтовый адрес'})
  readonly email: string;
  
  @ApiProperty({example: '123456789', description: 'Пароль'})
  readonly password: string;
}