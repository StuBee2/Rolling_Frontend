import { useMutation } from "react-query";
import LoggingRepositoryImpl from "@src/repositories/Logging/logging.repositoryImpl";
import { LoggingParam } from "@src/repositories/Logging/logging.repository";

export const usePostLoggingMutation = () => {
  const mutate = useMutation(({ description, module }: LoggingParam) =>
    LoggingRepositoryImpl.postLogging({ description, module })
  );
  return mutate;
};
