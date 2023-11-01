import { QUERY_KEYS } from "@src/queries/queryKey";
import { useDeleteMyStoryMutation } from "@src/queries/Story/story.query";
import { storyErrorHanlder } from "@src/utils/Error/Story/storyErrorHanlder";
import { useRollingToast } from "@stubee2/stubee2-rolling-toastify";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useQueryInvalidates } from "../Invalidates/useQueryInvalidates";
import { useRecoilState } from "recoil";
import { StoryModifiableEventAtom } from "@src/stores/story/story.store";
import { StoryModifiableIdAtom } from "@src/stores/story/story.store";

export const useSetUpStory = () => {
  const [isClickDots, setIsClickDots] = useState(false);
  const [isModifiableEvent, setIsModifiableEvent] = useRecoilState(
    StoryModifiableEventAtom
  );
  const [changeElementId, setChangeElementId] = useRecoilState(
    StoryModifiableIdAtom
  );

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
        return hanldeModifiableMyStroy(storyId);
      case 1:
        return hanldeDeleteMyStory(storyId, companyId);
      case 2:
        return handleCloseMyStory();
      default:
        break;
    }
  };

  const hanldeModifiableMyStroy = (storyId: string) => {
    setChangeElementId(storyId);
    setIsModifiableEvent(true);
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

  const handleCloseMyStory = () => {
    setIsClickDots(false);
    setIsModifiableEvent(false);
  };

  return { isClickDots, setIsClickDots, hanldeStorySetUpClick };
};
