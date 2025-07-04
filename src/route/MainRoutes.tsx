import type { RouteObject } from 'react-router-dom';

import { Home, Todo, Mandal, History } from '@/page';
import { PATH } from './path';

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
