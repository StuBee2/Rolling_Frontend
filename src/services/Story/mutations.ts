import {
  StoryCompanyContentsType,
  StoryPostType,
} from "@src/types/Story/story.type";
import { useMutation } from "react-query";
import storyApi from "./api";

export const usePostStoryMutation = () => {
  const mutation = useMutation((storyInfo: StoryPostType) =>
    storyApi.postStory(storyInfo)
  );
  return mutation;
};

export const useDeleteMyStoryMutation = () => {
  const mutation = useMutation((storyId: string) =>
    storyApi.deleteMyStory(storyId)
  );
  return mutation;
};

export const usePatchMyStoryMutation = () => {
  const mutation = useMutation(
    (input: { storyId: string; storyContent: StoryCompanyContentsType }) =>
      storyApi.patchMyStory(input)
  );
  return mutation;
};
