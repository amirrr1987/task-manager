import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tasks' })
export class TaskEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
    comment: 'The label of the task',
  })
  label: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
    comment: 'The label of the task',
  })
  description: string;

  @Column({
    type: 'enum',
    enum: ['TODO', 'DOING', 'DONE'],
    default: 'TODO',
    nullable: false,
    comment: 'The current state of the task',
  })
  state: 'TODO' | 'DOING' | 'DONE';

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: false,
    comment: 'The creation date of the task',
  })
  createdAt: string;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
    nullable: false,
    comment: 'The last update date of the task',
  })
  updatedAt: string;
}
