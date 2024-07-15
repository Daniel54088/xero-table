import { QueryClient } from '@tanstack/react-query';
import { createBrowserRouter } from 'react-router-dom';

import { balanceSheetLoader } from './app/balance-sheet/balance-sheet';

export const createRouter = (queryClient: QueryClient) =>
  createBrowserRouter([
    {
      path: '/',
      lazy: async () => {
        const { BalanceSheetRoute } = await import(
          './app/balance-sheet/balance-sheet'
        );
        return { Component: BalanceSheetRoute };
      },
      loader: balanceSheetLoader(queryClient),
    },
    {
      path: '*',
      lazy: async () => {
        const { NotFoundRoute } = await import('./not-found');
        return { Component: NotFoundRoute };
      },
    },
  ]);
