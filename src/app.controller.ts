import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateCatDto } from './cats/dto/index.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    createCatDto;
    return `this action adds a new cat`;
  }
}
