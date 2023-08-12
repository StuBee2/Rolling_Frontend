import { useMutation } from "react-query";
import LoggingRepositoryImpl from "@src/repositories/Logging/log.repositoryImpl";
import { LoggingParam } from "@src/repositories/Logging/log.repository";

export const usePostLogMutation = () => {
  return useMutation(({ description, module }: LoggingParam) =>
    LoggingRepositoryImpl.postLogging({ description, module })
  );
};
