import { queryInvalidateType } from "@src/types/Invalidates/invalidates.type";
import { useQueryClient } from "react-query";

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
