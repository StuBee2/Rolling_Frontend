import { useCallback } from "react";
import { QueryClient } from "react-query";
import { useDeleteCompanyQuery } from "../../queries/Company/company.query";
import { QUERY_KEYS } from "../../queries/queryKey";

export function useCompanyDelete() {
  const deleteCompanyMutation = useDeleteCompanyQuery();
  const queryClient = new QueryClient();

  const onDeleteCompany = useCallback((companyId: string) => {
    const answer = window.confirm("회사를 삭제하시겠습니까?");
    if (answer === true) {
      deleteCompanyMutation.mutate(
        {
          companyId: companyId,
        },
        {
          onSuccess: () => {
            queryClient.invalidateQueries([QUERY_KEYS.company.deleteCompany]);
            console.log("회사 삭제 성공");
          },
          onError: () => {
            console.log("회사 삭제 실패");
          },
        }
      );
    }
  }, []);
  return { onDeleteCompany };
}
