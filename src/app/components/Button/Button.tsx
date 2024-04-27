import React, { ReactNode } from 'react';
import styles from './Button.module.css';
import Link from 'next/link';

interface ButtonProps {
  label: string | ReactNode;
  src?: string;
  className?: string; // Optional custom className
  onClick?: () => {};
}

const Button = ({ label, src = '', className = '' }: ButtonProps) => {
  return (
    <div className={`${styles.glowingWrapper} ${styles.glowingWrapperActive} mt-30 ${className}`}>
      <div className={styles.glowingWrapperAnimations}>
        <div className={styles.glowingWrapperGlow}></div>
        <div className={styles.glowingWrapperMaskWrapper}>
          <div className={styles.glowingWrapperMask}></div>
        </div>
      </div>
      <div className={styles.glowingWrapperBordersMasker}>
        <div className={styles.glowingWrapperBorders}></div>
      </div>
      <Link href={src}
        className={styles.glowingWrapperButton}>
        <div className={styles.buttonText}>{label}</div>
      </Link>
    </div>

  );
};

export default Button;