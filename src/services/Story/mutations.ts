import {
  StoryCompanyContentsType,
  StoryPostType,
} from "@src/types/Story/story.type";
import { useMutation } from "react-query";
import StoryApi from "./api";

export const usePostStoryMutation = () => {
  const mutation = useMutation((storyInfo: StoryPostType) =>
    StoryApi.postStory(storyInfo)
  );
  return mutation;
};

export const useDeleteMyStoryMutation = () => {
  const mutation = useMutation((storyId: string) =>
    StoryApi.deleteMyStory(storyId)
  );
  return mutation;
};

export const usePatchMyStoryMutation = () => {
  const mutation = useMutation(
    (input: { storyId: string; storyContent: StoryCompanyContentsType }) =>
      StoryApi.patchMyStory(input)
  );
  return mutation;
};
