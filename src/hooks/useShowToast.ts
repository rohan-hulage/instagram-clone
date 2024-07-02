import { toast } from "react-toastify";

type ToastStatus = 'error' | 'success' | 'info' | 'default';

const useShowToast = () => {
  const showToast = (title: string, description: string, status: ToastStatus) => {
    switch (status) {
      case 'error':
        toast.error(`${title}: ${description}`);
        break;
      case 'success':
        toast.success(`${title}: ${description}`);
        break;
      case 'info':
        toast.info(`${title}: ${description}`);
        break;
      default:
        toast(`${title}: ${description}`);
    }
  };
  return showToast;
};

export default useShowToast;