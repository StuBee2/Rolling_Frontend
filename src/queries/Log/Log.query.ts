import { useMutation } from "react-query";
import loggingRepositoryImpl from "../../repositories/Logging/log.repositoryImpl";
import { LoggingParam } from "../../repositories/Logging/log.param";

export const usePostLogMutation = () => {
  return useMutation(({ description, module }: LoggingParam) =>
    loggingRepositoryImpl.postLogging({ description, module })
  );
};
