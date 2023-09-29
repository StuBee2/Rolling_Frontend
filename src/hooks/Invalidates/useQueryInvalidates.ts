import { useQueryClient } from "react-query";

export const useQueryInvalidates = () => {
  const queryClient = useQueryClient();
  const queryInvalidates = (queryKeys: (string | string[])[]) => {
    return queryKeys.map((item) => queryClient.invalidateQueries(item));
  };
  return { queryInvalidates };
};
