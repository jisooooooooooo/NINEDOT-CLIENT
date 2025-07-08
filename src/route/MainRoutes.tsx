import type { RouteObject } from 'react-router-dom';

import { PATH } from './path';

import { Home, Todo, Mandal, History } from '@/page';
import UpperTodo from '@/page/todo/upperTodo/UpperTodo';
import LowerTodo from '@/page/todo/lowerTodo/LowerTodo';
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
      },
      {
        path: PATH.TODO_UPPER,
        element: <UpperTodo />,
      },
      {
        path: PATH.TODO_LOWER,
        element: <LowerTodo />,
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
