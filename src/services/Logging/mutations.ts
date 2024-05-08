import { useMutation } from "react-query";
import loggingApi, { LoggingParam } from "./api";

export const usePostLoggingMutation = () => {
  const mutate = useMutation(({ description, module }: LoggingParam) =>
    loggingApi.postLogging({ description, module })
  );
  return mutate;
};
