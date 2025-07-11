import type { RouteObject } from 'react-router-dom';

import { PATH } from './path';

import { Home, Todo, Mandal, History, SignUp, Edit } from '@/page';
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
      },
      {
        path: PATH.TODO_UPPER,
        element: <UpperGoal />,
      },
      {
        path: PATH.TODO_LOWER,
        element: <LowerGoal />,
      },
      {
        path: PATH.MANDAL,
        element: <Mandal />,
      },
      {
        path: PATH.HISTORY,
        element: <History />,
      },
      {
        path: PATH.SIGNUP,
        element: <SignUp />,
      },
      {
        path: PATH.EDIT,
        element: <Edit />,
      },
    ],
  },
];
