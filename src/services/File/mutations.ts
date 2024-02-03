import { useMutation } from "react-query";
import FileApi, { FileParam } from "./api";

export const useUploadFileMutation = () => {
  const mutation = useMutation((file: FileParam) => FileApi.uploadFile(file));
  return mutation;
};
