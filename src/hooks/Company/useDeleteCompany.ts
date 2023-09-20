import { useDeleteCompanyMutation } from "@src/queries/Company/company.query";
import { useQueryClient } from "react-query";
import { QUERY_KEYS } from "@src/queries/queryKey";
import { useRollingToast } from "@stubee2/stubee2-rolling-toastify";

export const useDeleteCompany = () => {
  const deleteCompany = useDeleteCompanyMutation();
  const queryClient = useQueryClient();
  const { rollingToast } = useRollingToast();

  const handleCompanyDeleteClick = async (companyId: string) => {
    const answer = window.confirm("회사를 삭제하시겠습니까?");
    if (answer) {
      deleteCompany.mutateAsync(companyId, {
        onSuccess: () => {
          rollingToast("회사를 삭제하였습니다.", "success");
          queryClient.invalidateQueries(QUERY_KEYS.company.getMyListCompany);
        },
        onError: (e) => {
          rollingToast("회사 삭제에 실패했습니다.", "error");
        },
      });
    }
  };

  return { handleCompanyDeleteClick };
};
