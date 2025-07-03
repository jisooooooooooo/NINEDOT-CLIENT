export const PATH = {
  ROOT: '/',
  TODO: '/todo',
  MANDAL: '/mandal',
  EDIT: '/edit',
  HISTORY: '/history',
} as const;

export type PathType = (typeof PATH)[keyof typeof PATH];
