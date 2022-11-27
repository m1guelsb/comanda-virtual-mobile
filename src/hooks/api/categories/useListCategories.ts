import { useQueryGet } from '@/hooks/query';
import { Category } from '@/types';

interface useListCategoriesProps {
  params?: { [key: string]: string | number | undefined };
  queryConfigs?: {
    onSuccess?(data: Category[]): void;
    onError?(error: unknown): void;
  };
}
export const useListCategories = (queryOptions?: useListCategoriesProps) => {
  const { queryConfigs, params } = queryOptions || {};

  const { data, ...rest } = useQueryGet<Category[]>({
    queryKeys: ['categories'],
    url: '/categories',
    params,
    queryConfigs: {
      refetchOnWindowFocus: false,
      ...queryConfigs,
    },
  });

  return { categoryList: data, ...rest };
};
