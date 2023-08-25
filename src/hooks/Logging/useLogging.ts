import { usePostLoggingMutation } from "@src/queries/Logging/logging.query";

export const useLogging = () => {
  const loggingMutataion = usePostLoggingMutation();
  const handleLogging = async (description: string, module: string) => {
    loggingMutataion.mutateAsync(
      { description, module },
      {
        onError: (e) => {
          console.log(e);
        },
      }
    );
  };
  return { handleLogging };
};
