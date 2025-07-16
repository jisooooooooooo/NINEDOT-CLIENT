export const PATH = {
  ROOT: '/',
  INTRO: '/intro',
  TODO: '/todo',
  TODO_UPPER: '/todo/upper',
  TODO_LOWER: '/todo/lower',
  MANDAL: '/mandal',
  EDIT: '/edit',
  HISTORY: '/history',
  TERMS: '/terms',
  PRIVACY: '/privacy',
  SIGNUP: '/signup',
} as const;

export type PathType = (typeof PATH)[keyof typeof PATH];
