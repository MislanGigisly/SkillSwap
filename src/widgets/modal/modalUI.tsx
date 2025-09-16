import { FC, MouseEvent } from 'react';
import styles from './modal.module.css';
import React from 'react';
import clsx from 'clsx';

interface ModalUIProps {
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export const ModalUI: FC<ModalUIProps> = ({ children, className }) => {
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div className={clsx(styles.modal, className)} onClick={handleClick}>
      {children}
    </div>
  );
};
