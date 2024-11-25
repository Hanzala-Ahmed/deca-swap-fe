import { ModalProvider } from '@/app/lib/context/modalContext';
import { ToastProvider } from '@/app/lib/context/toastProvider';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ModalProvider>
      <ToastProvider>{children}</ToastProvider>
    </ModalProvider>
  );
};

export default HomeLayout;
