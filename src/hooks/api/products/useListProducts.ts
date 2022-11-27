import { useQueryGet } from '@/hooks/query';
import { Product } from '@/types';

interface useListProductsProps {
  filterParams?: { categoryId: string | undefined };
  queryConfigs?: {
    onSuccess?(data: Product[]): void;
    onError?(error: unknown): void;
  };
}
export const useListProducts = (queryOptions?: useListProductsProps) => {
  const { filterParams, queryConfigs } = queryOptions || {};

  const { data, ...rest } = useQueryGet<Product[]>({
    queryKeys: ['products'],
    url: '/products',
    params: filterParams,
    queryConfigs: {
      refetchOnWindowFocus: false,
      ...queryConfigs,
    },
  });

  return { productList: data, ...rest };
};
