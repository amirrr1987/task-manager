import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { pgConfig } from './config/dbConfig';

@Module({
  imports: [TypeOrmModule.forRoot(pgConfig), TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
