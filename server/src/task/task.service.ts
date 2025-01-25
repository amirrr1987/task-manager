import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskEntity } from './entities/task.entity';
import { FindOneTaskDto } from './dto/findOne-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskRepository } from './task.repository';
import { ITaskService } from './interfaces/task.service.interface';

@Injectable()
export class TaskService implements ITaskService {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepository: TaskRepository,
  ) {}
  async createTask(createTaskDto: CreateTaskDto) {
    const task = this.taskRepository.create(createTaskDto);
    return await this.taskRepository.save(task);
  }

  async findTaskList() {
    return await this.taskRepository.find();
  }

  async findTaskById(id: number) {
    return await this.taskRepository.findOneBy({ id });
  }

  async searchTask(dto: FindOneTaskDto) {
    return await this.taskRepository.findOneBy(dto);
  }

  async updateTaskById(id: number, updateTaskDto: UpdateTaskDto) {
    const result = await this.taskRepository.update(id, updateTaskDto);
    return result.affected > 0 ? 'Success' : 'Not success';
  }

  async deleteTaskById(id: number) {
    return await this.taskRepository.delete(id);
  }
}
