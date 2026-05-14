import { useEffect, useState } from 'react';

/**
 * Mount/unmount with separate "visible" state so CSS transitions can play
 * on enter AND exit. Use:
 *
 *   const { mounted, visible } = useEnterExit(open, 280);
 *   if (!mounted) return null;
 *   return <div className={`transition-all duration-300 ${visible ? '...' : '...'}`}>
 */
export const useEnterExit = (open: boolean, exitMs = 280) => {
  const [mounted, setMounted] = useState(open);
  const [visible, setVisible] = useState(open);

  useEffect(() => {
    if (open) {
      setMounted(true);
      // Two RAFs ensure the element is in the DOM with initial classes
      // before we toggle to visible — guarantees the transition fires.
      const id1 = requestAnimationFrame(() => {
        const id2 = requestAnimationFrame(() => setVisible(true));
        cleanup = () => cancelAnimationFrame(id2);
      });
      let cleanup = () => cancelAnimationFrame(id1);
      return () => cleanup();
    } else {
      setVisible(false);
      const id = window.setTimeout(() => setMounted(false), exitMs);
      return () => window.clearTimeout(id);
    }
  }, [open, exitMs]);

  return { mounted, visible };
};
