import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { TaskState } from '../../enums';

export class FindOneTaskDto {
  @IsNumber()
  @IsOptional()
  id: number;

  @IsString({ message: 'Label must be a string.' })
  @IsOptional()
  label: string;

  @IsString({ message: 'Description must be a string.' })
  @IsOptional()
  description: string;

  @IsEnum(TaskState, {
    message: `State must be one of the following: ${Object.values(TaskState).join(', ')}.`,
  })
  @IsOptional()
  state: TaskState;
}
