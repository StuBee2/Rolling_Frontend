import { usePostLoggingMutation } from "@src/services/Logging/mutations";
import { changeUrlToLoggingText } from "@src/utils/Logging/changeUrlToLoggingText";

export const useLogging = () => {
  const loggingMutataion = usePostLoggingMutation();

  const handleLogging = (link: string) => {
    const loggingText = changeUrlToLoggingText(link);
    const loggingData = {
      description: loggingText,
      module: loggingText,
    };
    loggingMutataion.mutate(loggingData, {
      onSuccess: () => {
        console.log(loggingData);
      },
      onError: (e) => {
        console.log(e);
      },
    });
  };

  return { handleLogging };
};
