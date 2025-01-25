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
import { ITaskController } from './interfaces/task.controller.interface';

@Controller('tasks')
export class TaskController implements ITaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.createTask(createTaskDto);
  }

  @Get()
  findTaskList() {
    return this.taskService.findTaskList();
  }

  @Get(':id')
  findTaskById(@Param('id') id: number) {
    return this.taskService.findTaskById(id);
  }

  @Post('search')
  searchTask(@Body() dto: FindOneTaskDto) {
    return this.taskService.searchTask(dto);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  updateTaskById(
    @Param('id') id: number,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    return this.taskService.updateTaskById(id, updateTaskDto);
  }

  @Delete(':id')
  deleteTaskById(@Param('id') id: number) {
    return this.taskService.deleteTaskById(id);
  }
}
