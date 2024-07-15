import { QueryClient } from '@tanstack/react-query';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { ContentLayout } from '@/components/layouts';
import { Spinner } from '@/components/ui/spinner';
import { getBalanceSheetQueryOptions } from '@/features/balance-sheet/api/get-balance-sheet';
import { BalanceSheetTable } from '@/features/balance-sheet/components/balance-sheet-table';
import { reportsSchema } from '@/types/balance-sheet';

export const balanceSheetLoader = (queryClient: QueryClient) => async () => {
  const balanceSheetQuery = getBalanceSheetQueryOptions();

  const promises = [
    queryClient.getQueryData(balanceSheetQuery.queryKey) ??
      (await queryClient.fetchQuery(balanceSheetQuery)),
  ] as const;

  const [balanceSheet] = await Promise.all(promises);
  const parsedReports = reportsSchema.safeParse(balanceSheet);

  if (!parsedReports.success) {
    // check xero balance sheet is correct type and validate with zod
    console.log('Wrong balanceSheet format', balanceSheet);
    throw new Error('Incorrect Xero balance sheet format. Try again later');
  }

  return {
    balanceSheet: parsedReports.data,
  };
};

export const BalanceSheetRoute = () => {
  return (
    <>
      <ContentLayout title="Xero">
        <Suspense
          fallback={
            <div className="flex size-full items-center justify-center">
              <Spinner size="xl" />
            </div>
          }
        >
          <ErrorBoundary
            fallback={
              <div>
                Failed to load Xero balance sheet. Try to refresh the page.
              </div>
            }
          >
            <BalanceSheetTable />
          </ErrorBoundary>
        </Suspense>
      </ContentLayout>
    </>
  );
};
