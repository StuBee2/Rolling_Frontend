import { useRecoilState, useSetRecoilState } from "recoil";
import axios, { AxiosError } from "axios";
import { QUERY_KEYS } from "@src/queries/queryKey";
import { useDeleteMyStoryMutation } from "@src/queries/Story/story.query";
import { storyErrorHanlder } from "@src/utils/Error/Story/storyErrorHanlder";
import { useRollingToast } from "@stubee2/stubee2-rolling-toastify";
import { useQueryInvalidates } from "../Invalidates/useQueryInvalidates";
import { StorySetupInitializationDotAtom } from "@src/stores/story/story.store";
import { StoryModifiableEventAtom } from "@src/stores/story/story.store";
import { StoryModifiableIdAtom } from "@src/stores/story/story.store";

export const useSetUpStory = () => {
  const setIsModifiableEvent = useSetRecoilState(StoryModifiableEventAtom);
  const [isClickDots, setIsClickDots] = useRecoilState(
    StorySetupInitializationDotAtom
  );
  const [modifyStoryId, setModifyStoryId] = useRecoilState(
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
        return hanldeModifiableMyStroy();
      case 1:
        return hanldeDeleteMyStory(storyId, companyId);
      case 2:
        return handleCloseMyStory();
      default:
        break;
    }
  };

  const hanldeModifiableMyStroy = () => {
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

  return {
    modifyStoryId,
    setModifyStoryId,

    isClickDots,
    setIsClickDots,

    hanldeStorySetUpClick,
  };
};
