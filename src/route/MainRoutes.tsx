import type { RouteObject } from 'react-router-dom';

import { PATH } from './path';

import { Home, Todo, Mandal, History } from '@/page';
import { UpperGoal, LowerGoal } from '@/page/todo';
import { Layout } from '@/shared/component/Layout';

export const mainRoutes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        path: PATH.ROOT,
        element: <Home />,
      },
      {
        path: PATH.TODO,
        element: <Todo />,
        children: [
          {
            path: 'upper',
            element: <UpperGoal />,
          },
          {
            path: 'lower',
            element: <LowerGoal />,
          },
        ],
      },
      {
        path: PATH.MANDAL,
        element: <Mandal />,
      },
      {
        path: PATH.HISTORY,
        element: <History />,
      },
    ],
  },
];
