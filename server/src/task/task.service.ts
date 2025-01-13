import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Repository } from 'typeorm';
import { TaskEntity } from './entities/task.entity';
import { FindOneTaskDto } from './dto/findOne-task.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepository: Repository<TaskEntity>,
  ) {}
  async create(createTaskDto: CreateTaskDto) {
    const task = this.taskRepository.create(createTaskDto);
    return await this.taskRepository.save(task);
  }

  async findAll() {
    return await this.taskRepository.find();
  }

  async findOneBy(dto: FindOneTaskDto) {
    return await this.taskRepository.findOneBy(dto);
  }

  async update(updateTaskDto: UpdateTaskDto) {
    const result = await this.taskRepository.update(
      updateTaskDto.id,
      updateTaskDto,
    );
    return result.affected > 0 ? 'Success' : 'Not success';
  }

  async remove(id: number) {
    return await this.taskRepository.delete(id);
  }
}
