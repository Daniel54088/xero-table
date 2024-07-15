import { queryOptions, useQuery } from '@tanstack/react-query';

import { api } from '@/lib/api-client';
import { QueryConfig } from '@/lib/react-query';
import { Reports } from '@/types/balance-sheet';

export const getBalanceSheet = (): Promise<Reports> => {
  return api.get(`/xero/balance-sheet`);
};

export const getBalanceSheetQueryOptions = () => {
  return queryOptions({
    queryKey: ['balance-sheet'],
    queryFn: () => getBalanceSheet(),
  });
};

type UseBalanceSheetOptions = {
  queryConfig?: QueryConfig<typeof getBalanceSheet>;
};

export const useBalanceSheet = ({
  queryConfig,
}: UseBalanceSheetOptions = {}) => {
  return useQuery({
    ...getBalanceSheetQueryOptions(),
    ...queryConfig,
  });
};
