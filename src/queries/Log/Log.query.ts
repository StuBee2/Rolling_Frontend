import { useMutation } from "react-query";
import loggingRepository from "../../repositories/Logging/log.repository";
import { LoggingParam } from "../../repositories/Logging/log.param";

export const usePostLogMutation = () => {
  return useMutation("/logging", ({ description, module }: LoggingParam) =>
    loggingRepository.postLogging({ description, module })
  );
};
