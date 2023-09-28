import { useQueryClient } from "react-query";

interface queryInvalidateType {
  queryKey: string | string[];
  refetchInactive?: boolean;
}

export const useQueryInvalidates = () => {
  const queryClient = useQueryClient();
  const queryInvalidates = (queryKeys: queryInvalidateType[]) => {
    return queryKeys.map((item) =>
      queryClient.invalidateQueries(item.queryKey, {
        refetchInactive: item.refetchInactive,
      })
    );
  };
  return { queryInvalidates };
};
