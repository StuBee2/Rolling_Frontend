import { useQueryClient } from "react-query";

export const useQueryInvalidates = () => {
  const queryClient = useQueryClient();
  const queryInvalidates = (queryKeys: (string | (string | number)[])[]) => {
    return queryKeys.map((item) =>
      queryClient.invalidateQueries(item, { refetchInactive: true })
    );
  };
  return { queryInvalidates };
};
