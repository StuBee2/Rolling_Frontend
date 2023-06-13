import { useMutation } from "react-query";
import LoggingRepositoryImpl from "../../repositories/Logging/log.repositoryImpl";
import { LoggingParam } from "../../repositories/Logging/log.repository";

export const usePostLogMutation = () => {
  return useMutation(({ description, module }: LoggingParam) =>
    LoggingRepositoryImpl.postLogging({ description, module })
  );
};
