import type { RouteObject } from 'react-router-dom';

import { PATH } from './path';

import { Home, Todo, Mandal, History, SignUp, Edit, GoogleCallback } from '@/page';
import { UpperTodo, LowerTodo, MyTodo } from '@/page/todo';
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
        path: PATH.REDIRECT,
        element: <GoogleCallback />,
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
        path: PATH.TODO_MY,
        element: <MyTodo />,
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
