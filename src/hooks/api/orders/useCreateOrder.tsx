import { useQueryPost } from '@/hooks/query';

export interface OrderPayload {
  table: string;
  products: {
    product: string;
    quantity: number;
  }[];
}

export const useCreateOrder = () => {
  const { post, ...rest } = useQueryPost<OrderPayload>({
    url: '/orders',
  });

  return { createOrder: post, ...rest };
};
