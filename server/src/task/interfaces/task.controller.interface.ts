import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';
import { FindOneTaskDto } from '../dto/findOne-task.dto';

export interface ITaskController {
  createTask(createTaskDto: CreateTaskDto): Promise<any>;
  findTaskList(): Promise<any>;
  findTaskById(id: number): Promise<any>;
  searchTask(dto: FindOneTaskDto): Promise<any>;
  updateTaskById(id: number, updateTaskDto: UpdateTaskDto): Promise<any>;
  deleteTaskById(id: number): Promise<any>;
}
