export const PATH = {
  ROOT: '/',
  INTRO: '/intro',
  TODO: '/todo',
  TODO_UPPER: '/todo/upper',
  TODO_LOWER: '/todo/lower',
  TODO_MY: '/todo/my',
  MANDAL: '/mandal',
  EDIT: '/edit',
  HISTORY: '/history',
  TERMS: '/terms',
  PRIVACY: '/privacy',
  SIGNUP: '/signup',
  REDIRECT: '/auth/google/callback',
} as const;

export type PathType = (typeof PATH)[keyof typeof PATH];
