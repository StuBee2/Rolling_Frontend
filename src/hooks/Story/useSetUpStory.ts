import { QUERY_KEYS } from "@src/queries/queryKey";
import { useDeleteMyStoryMutation } from "@src/queries/Story/story.query";
import { storyErrorHanlder } from "@src/utils/Error/Story/storyErrorHanlder";
import { useRollingToast } from "@stubee2/stubee2-rolling-toastify";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useQueryInvalidates } from "../Invalidates/useQueryInvalidates";

export const useSetUpStory = () => {
  const [isClickDots, setIsClickDots] = useState(false);
  const { queryInvalidates } = useQueryInvalidates();
  const deleteMyStory = useDeleteMyStoryMutation();
  const { rollingToast } = useRollingToast();

  const hanldeStorySetUpClick = (
    id: number,
    storyId: string,
    companyId: string
  ) => {
    switch (id) {
      case 0:
        return;
      case 1:
        return hanldeDeleteMyStory(storyId, companyId);
      case 2:
        return setIsClickDots(false);
      default:
        break;
    }
  };

  const hanldeDeleteMyStory = (storyId: string, companyId: string) => {
    const answer = window.confirm("리뷰한 회사를 삭제하시겠습니까?");
    if (answer) {
      deleteMyStory.mutate(storyId, {
        onSuccess: () => {
          queryInvalidates([
            QUERY_KEYS.story.getStoryListCompanyId(companyId),
            QUERY_KEYS.story.getMyStory,
            QUERY_KEYS.story.getStoryMyStatus,
          ]);
          rollingToast("리뷰를 삭제하였습니다.", "success");
        },
        onError: (error) => {
          if (axios.isAxiosError(error)) {
            const { status, message } = error.response?.data as AxiosError;
            rollingToast(storyErrorHanlder(Number(status), message), "error");
          }
        },
      });
    }
  };

  return { isClickDots, setIsClickDots, hanldeStorySetUpClick };
};
