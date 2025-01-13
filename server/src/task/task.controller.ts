import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { FindOneTaskDto } from './dto/findOne-task.dto';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Post('search')
  findOneBy(@Body('id') dto: FindOneTaskDto) {
    return this.taskService.findOneBy(dto);
  }

  @Patch()
  @UsePipes(new ValidationPipe())
  update(@Body() updateTaskDto: UpdateTaskDto) {
    if (updateTaskDto.id) return this.taskService.update(updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskService.remove(+id);
  }
}
