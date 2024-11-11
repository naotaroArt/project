import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@Controller('api')
@ApiTags('Example')
export class AppController {
  @Get('data')
  @ApiResponse({ status: 200, description: 'Data retrieved successfully.' })
  getData() {
    return { message: 'Hello from NestJS backend!' };
  }
}
