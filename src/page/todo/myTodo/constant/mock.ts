import type { TodoItemTypes } from '../component/TodoBox/TodoBox.types';

export type CycleType = 'DAILY' | 'WEEKLY' | 'ONCE';

export interface SubGoal {
  title: string;
  position: number;
  cycle: CycleType;
}

export interface MandalartData {
  title: string;
  mainGoal: string;
  subGoals: SubGoal[];
}

export const DEFAULT_MANDALART_DATA: MandalartData = {
  mainGoal: '나인도트 1등',
  subGoals: [
    { title: '세부 목표 작성완료', position: 0, cycle: 'DAILY' },
    { title: '세부 목표 작성완료', position: 1, cycle: 'DAILY' },
    { title: '세부 목표 작성완료', position: 2, cycle: 'DAILY' },
    { title: '세부 목표 작성완료', position: 3, cycle: 'DAILY' },
    { title: '세부 목표 작성완료', position: 4, cycle: 'DAILY' },
    { title: '세부 목표 작성완료', position: 5, cycle: 'DAILY' },
    { title: '세부 목표 작성완료', position: 6, cycle: 'DAILY' },
    { title: '세부 목표 작성완료', position: 7, cycle: 'DAILY' },
  ],
  title: '',
};

export const DEFAULT_RECOMMEND_TODOS: TodoItemTypes[] = [
  {
    id: '1',
    content: '오늘의 할 일 추천 내용',
    completed: false,
    cycle: 'DAILY',
    isCompleted: undefined,
  },
  {
    id: '2',
    content: '오늘의 할 일 추천 내용',
    completed: false,
    cycle: 'WEEKLY',
    isCompleted: undefined,
  },
  {
    id: '3',
    content: '오늘의 할 일 추천 내용',
    completed: false,
    cycle: 'ONCE',
    isCompleted: undefined,
  },
];

export const DEFAULT_MY_TODOS: TodoItemTypes[] = [
  {
    id: '4',
    content: '할 일 업무 완료 상태',
    completed: false,
    cycle: 'DAILY',
    isCompleted: undefined,
  },
  {
    id: '5',
    content: '할 일 업무 완료 상태',
    completed: true,
    cycle: 'WEEKLY',
    isCompleted: undefined,
  },
  {
    id: '6',
    content: '할 일 업무 완료 상태',
    completed: false,
    cycle: 'ONCE',
    isCompleted: undefined,
  },
  {
    id: '7',
    content: '할 일 업무 완료 상태',
    completed: false,
    cycle: 'DAILY',
    isCompleted: undefined,
  },
  {
    id: '8',
    content: '할 일 업무 완료 상태',
    completed: false,
    cycle: 'WEEKLY',
    isCompleted: undefined,
  },
  {
    id: '9',
    content: '할 일 업무 완료 상태',
    completed: false,
    cycle: 'ONCE',
    isCompleted: undefined,
  },
  {
    id: '10',
    content: '할 일 업무 완료 상태',
    completed: false,
    cycle: 'DAILY',
    isCompleted: undefined,
  },
  {
    id: '11',
    content: '할 일 업무 완료 상태',
    completed: false,
    cycle: 'WEEKLY',
    isCompleted: undefined,
  },
  {
    id: '12',
    content: '할 일 업무 완료 상태',
    completed: true,
    cycle: 'ONCE',
    isCompleted: undefined,
  },
  {
    id: '13',
    content: '할 일 업무 완료 상태',
    completed: false,
    cycle: 'DAILY',
    isCompleted: undefined,
  },
  {
    id: '14',
    content: '할 일 업무 완료 상태',
    completed: false,
    cycle: 'WEEKLY',
    isCompleted: undefined,
  },
  {
    id: '15',
    content: '할 일 업무 완료 상태',
    completed: false,
    cycle: 'ONCE',
    isCompleted: undefined,
  },
];
