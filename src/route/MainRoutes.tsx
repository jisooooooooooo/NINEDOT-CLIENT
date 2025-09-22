import type { RouteObject } from 'react-router-dom';

import { PATH } from './path';

import { Layout } from '@/shared/component/Layout';
import Home from '@/page/home/Home';
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
        async lazy() {
          const { GoogleCallback } = await import('@/page');
          return { Component: GoogleCallback };
        },
      },
      {
        path: PATH.TODO,
        async lazy() {
          const { Todo } = await import('@/page');
          return { Component: Todo };
        },
      },
      {
        path: PATH.TODO_UPPER,
        async lazy() {
          const { UpperTodo } = await import('@/page/todo');
          return { Component: UpperTodo };
        },
      },
      {
        path: PATH.TODO_LOWER,
        async lazy() {
          const { LowerTodo } = await import('@/page/todo');
          return { Component: LowerTodo };
        },
      },
      {
        path: PATH.TODO_MY,
        async lazy() {
          const { MyTodo } = await import('@/page/todo');
          return { Component: MyTodo };
        },
      },
      {
        path: PATH.MANDAL,
        async lazy() {
          const { Mandal } = await import('@/page');
          return { Component: Mandal };
        },
      },
      {
        path: PATH.HISTORY,
        async lazy() {
          const { History } = await import('@/page');
          return { Component: History };
        },
      },
      {
        path: PATH.EDIT,
        async lazy() {
          const { Edit } = await import('@/page');
          return { Component: Edit };
        },
      },
      {
        path: PATH.SIGNUP,
        async lazy() {
          const { SignUp } = await import('@/page');
          return { Component: SignUp };
        },
      },
    ],
  },
];
