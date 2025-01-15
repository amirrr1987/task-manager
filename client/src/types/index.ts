import type { Dayjs } from 'dayjs'
export enum StateEnum {
  TODO = 'TODO',
  DOING = 'DOING',
  DONE = 'DONE',
}
export interface Task {
  id: number
  label: string
  description: string
  state: StateEnum
  createdAt: Dayjs
  updatedAt: Dayjs
}
