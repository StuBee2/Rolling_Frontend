import { AppearanceTypes, useToasts } from "react-toast-notifications";

export const useToastAlert = () => {
  const { addToast } = useToasts();
  const toastAlert = (message: string, status: AppearanceTypes) => {
    addToast(message, {
      appearance: status,
      autoDismiss: true,
    });
  };
  return { toastAlert };
};
