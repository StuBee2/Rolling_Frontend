import { useMutation } from "react-query";
import fileApi, { FileParam } from "./api";

export const useUploadFileMutation = () => {
  const mutation = useMutation((file: FileParam) => fileApi.uploadFile(file));
  return mutation;
};
