export const PATH = {
  ROOT: '/',
  TODO: '/todo',
  TODO_UPPER: '/todo/upper',
  TODO_LOWER: '/todo/lower',
  MANDAL: '/mandal',
  EDIT: '/edit',
  HISTORY: '/history',
} as const;

export type PathType = (typeof PATH)[keyof typeof PATH];
