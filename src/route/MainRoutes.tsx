import type { RouteObject } from 'react-router-dom';

import { PATH } from './path';

import { Home, Todo, Mandal, History, Edit, SignUp } from '@/page';
import { LowerTodo } from '@/page/todo';
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
        element: <div>상위 목표 페이지</div>,
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
      {
        path: PATH.EDIT,
        element: <Edit />,
      },
      {
        path: PATH.SIGNUP,
        element: <SignUp />,
      },
    ],
  },
];
