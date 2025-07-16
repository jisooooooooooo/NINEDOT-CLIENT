import type { RouteObject } from 'react-router-dom';

import { PATH } from './path';

import { UpperTodo, LowerTodo } from '@/page/todo';
import { Home, Todo, Mandal, History, SignUp, Edit } from '@/page';
import { Layout } from '@/shared/component/Layout';
import Intro from '@/page/intro/Intro';

export const mainRoutes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        path: PATH.ROOT,
        element: <Home />,
      },
      {
        path: PATH.INTRO,
        element: <Intro />,
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
