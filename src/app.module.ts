import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { Test } from './test/test';

@Module({
  imports: [],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService, Test],
})
export class AppModule {}
