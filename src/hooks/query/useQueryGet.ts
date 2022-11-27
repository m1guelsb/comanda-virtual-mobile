import { useQuery } from '@tanstack/react-query';
import { api } from '@/services/axios';

export interface useQueryGetProps<TResponse> {
  queryKeys: string[];
  url: string;
  params?: { [key: string]: string | number | undefined };
  queryConfigs?: {
    enabled?: boolean;
    refetchOnWindowFocus?: boolean;
    onSuccess?(data: TResponse): void;
    onError?(error: unknown): void;
  };
}

export function useQueryGet<TResponse>({
  queryKeys,
  url,
  params,
  queryConfigs,
}: useQueryGetProps<TResponse>) {
  const queryResponse = useQuery(
    queryKeys,
    async () => {
      const { data } = await api.get<TResponse>(url, {
        params,
      });
      return data;
    },
    {
      retry: false,
      ...queryConfigs,
    }
  );

  return queryResponse;
}
