import { IsEnum, IsString } from 'class-validator';
import { TaskState } from '../../enums';

export class CreateTaskDto {
  @IsString({ message: 'Label must be a string.' })
  label: string;

  @IsString({ message: 'Description must be a string.' })
  description: string;

  @IsEnum(TaskState, {
    message: `State must be one of the following: ${Object.values(TaskState).join(', ')}.`,
  })
  state: TaskState;
}
