import { FC, useEffect, memo } from 'react';
import ReactDOM from 'react-dom';
import { ModalUI } from './modalUI';
import React from 'react';
import { Overlay } from './overlay';
import styles from './modal.module.css';

interface ModalProps {
  title?: string;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: FC<ModalProps> = memo(({ onClose, children }) => {
  const [root, setRoot] = React.useState<HTMLElement | null>(null);

  useEffect(() => {
    const modalsRoot = document.getElementById('modals');
    setRoot(modalsRoot);

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!root) return null;

  return ReactDOM.createPortal(
    <Overlay onClick={onClose}>
      <ModalUI onClose={onClose}>{children}</ModalUI>
    </Overlay>,
    root
  );
});
