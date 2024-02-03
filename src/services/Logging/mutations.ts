import { useMutation } from "react-query";
import LoggingApi, { LoggingParam } from "./api";

export const usePostLoggingMutation = () => {
  const mutate = useMutation(({ description, module }: LoggingParam) =>
    LoggingApi.postLogging({ description, module })
  );
  return mutate;
};
