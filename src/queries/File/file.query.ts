import { FileParam } from "@src/repositories/File/file.repository";
import fileRepositoryImpl from "@src/repositories/File/file.repositoryImpl";
import { useMutation } from "react-query";

export const useUploadFileMutation = () => {
  const mutation = useMutation((file: FileParam) =>
    fileRepositoryImpl.uploadFile(file)
  );
  return mutation;
};
