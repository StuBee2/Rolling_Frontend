import { useDeleteCompanyMutation } from "../../queries/Company/company.query";
import { useQueryClient } from "react-query";
import { QUERY_KEYS } from "../../queries/queryKey";

export const useDeleteCompany = () => {
  const deleteCompany = useDeleteCompanyMutation();
  const queryClient = useQueryClient();

  const handleCompanyDeleteClick = async (companyId: string) => {
    const answer = window.confirm("회사를 삭제하시겠습니까?");
    if (answer) {
      deleteCompany.mutateAsync(companyId, {
        onSuccess: () => {
          window.alert("회사를 삭제하였습니다.");
          queryClient.invalidateQueries(QUERY_KEYS.company.getMyListCompany);
        },
        onError: (e) => {
          console.log(e);
        },
      });
    }
  };

  return { handleCompanyDeleteClick };
};
