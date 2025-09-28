import type { RouteObject } from 'react-router-dom';

import { PATH } from './path';

import { Home, NotFound } from '@/page';
import { Layout } from '@/shared/component/Layout';
import Intro from '@/page/intro/Intro';
import LoginGuard from '@/route/LoginGuard';

export const mainRoutes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        path: PATH.ROOT,
        element: <Home />,
      },
      {
        path: PATH.REDIRECT,
        async lazy() {
          const { GoogleCallback } = await import('@/page');
          return { Component: GoogleCallback };
        },
      },
      {
        path: PATH.SIGNUP,
        async lazy() {
          const { SignUp } = await import('@/page');
          return { Component: SignUp };
        },
      },
      {
        path: PATH.NOT_FOUND,
        element: <NotFound />,
      },
      {
        element: <LoginGuard />,
        children: [
          {
            path: PATH.INTRO,
            element: <Intro />,
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
        ],
      },
    ],
  },
];
