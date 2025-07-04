import type { RouteObject } from 'react-router-dom';

import { PATH } from './path';

import { Home, Todo, Mandal, History } from '@/page';

export const mainRoutes: RouteObject[] = [
  {
    path: PATH.ROOT,
    element: <Home />,
  },
  {
    path: PATH.TODO,
    element: <Todo />,
  },
  {
    path: PATH.MANDAL,
    element: <Mandal />,
  },
  {
    path: PATH.HISTORY,
    element: <History />,
  },
];
