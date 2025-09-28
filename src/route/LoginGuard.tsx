import { Outlet } from 'react-router-dom';
import { useLoginModal } from '@/common/hook/useLoginModal';

export default function LoginGuard() {
  useLoginModal();
  return <Outlet />;
}
