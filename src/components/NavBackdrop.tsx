import { useEnterExit } from '../lib/transitions';

export const NavBackdrop = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const { mounted, visible } = useEnterExit(open, 280);
  if (!mounted) return null;

  return (
    <div
      onClick={onClose}
      aria-hidden="true"
      className={`fixed inset-0 z-40 transition-opacity duration-300 ease-out ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        backdropFilter: 'blur(24px) saturate(140%)',
        WebkitBackdropFilter: 'blur(24px) saturate(140%)',
        background: 'rgba(8, 13, 18, 0.45)',
      }}
    />
  );
};
