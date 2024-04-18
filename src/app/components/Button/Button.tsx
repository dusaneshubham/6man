import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  label: string;
  className?: string; // Optional custom className
  onClick?: () => {};
}

const Button = ({ label, className }: ButtonProps) => {
  return (
    <button type="button" value={label} className={`${styles.button} ${className}`}>
      {label}
    </button>
  );
};

export default Button;